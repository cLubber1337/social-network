import React, { useEffect } from "react"
import "./App.css"
import { NavBar } from "components/NavBar/NavBar"
import { Route, Switch } from "react-router-dom"
import DialogsContainer from "pages/MessagesPage/MessagesPageContainer"
import ProfileContainer from "pages/MyProfilePage/ProfileContainer"
import { LoginPage } from "pages/LoginPage/LoginPage"
import { Header } from "components/Header/Header"
import { useDispatch, useSelector } from "react-redux"
import { initialize } from "redux/app/reducer"
import Preloader from "components/common/Preloader"
import { selectInitialized } from "redux/app"
import { FriendsPage } from "pages/FriendsPage/FriendsPage"
import FindUsersPage from "pages/FindUsersPage/FindUsersPage"
import { NotFound } from "pages/404/NotFound"

const App = () => {
  const dispatch = useDispatch()
  const initialized = useSelector(selectInitialized)

  useEffect(() => {
    dispatch(initialize())
  }, [])

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
      <Switch>
        <Route path="/profile/:userID?" render={() => <ProfileContainer />} />
        <Route path="/dialogs/" render={() => <DialogsContainer />} />
        <Route path="/users" component={FindUsersPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/" exact component={ProfileContainer} />
        <Route path="/friends" component={FriendsPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
