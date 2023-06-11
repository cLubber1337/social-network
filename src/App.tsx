import React, { useEffect } from "react"
import "./App.css"
import { NavBar } from "components/NavBar/NavBar"
import { Redirect, Route, Switch } from "react-router-dom"
import DialogsContainer from "pages/MessagesPage/MessagesPageContainer"
import ProfileContainer from "pages/MyProfilePage/ProfileContainer"
import { LoginPage } from "pages/LoginPage/LoginPage"
import { Header } from "components/Header/Header"
import { useDispatch, useSelector } from "react-redux"
import { errorAction, initialize } from "redux/app/reducer"
import Preloader from "components/common/Preloader"
import { selectInitialized } from "redux/app"
import { FriendsPage } from "pages/FriendsPage/FriendsPage"
import FindUsersPage from "pages/FindUsersPage/FindUsersPage"
import { NotFound } from "pages/404/NotFound"
import { selectIsAuth } from "redux/auth"
import AlertError from "components/AlertError/AlertError"

const App = () => {
  const dispatch = useDispatch()
  const initialized = useSelector(selectInitialized)
  const isAuth = useSelector(selectIsAuth)

  const catchAllUnhandledErrors = (promiseRejectionEvent: PromiseRejectionEvent) => {
    dispatch(errorAction(promiseRejectionEvent.reason))
  }

  useEffect(() => {
    dispatch(initialize())

    window.addEventListener("unhandledrejection", catchAllUnhandledErrors)
    return () => {
      window.removeEventListener("unhandledrejection", catchAllUnhandledErrors)
    }
  }, [dispatch])

  if (!initialized)
    return (
      <div className={"preloader"}>
        <Preloader />
      </div>
    )
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <AlertError />
      <Switch>
        <Route path="/profile/:userID?" render={() => <ProfileContainer />} />
        <Route path="/dialogs/" render={() => <DialogsContainer />} />
        <Route path="/users" component={FindUsersPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/friends" component={FriendsPage} />
        {isAuth ? (
          <Route exact path="/" render={() => <Redirect to="/profile" />} />
        ) : (
          <Route path="/" component={LoginPage} />
        )}
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </div>
  )
}

export default App
