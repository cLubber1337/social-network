import React, { useEffect } from "react"
import "./App.css"
import { NavBar } from "components/NavBar/NavBar"
import { Route, Switch } from "react-router-dom"
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import UsersContainer from "./components/Users/UsersContainer"
import ProfileContainer from "./components/Profile/ProfileContainer"
import { Login } from "components/Login/Login"
import { Header } from "components/Header/Header"
import { useDispatch, useSelector } from "react-redux"
import { initialize } from "redux/app/reducer"
import Preloader from "components/common/Preloader"
import { selectInitialized } from "redux/app"
import { Friends } from "components/Friends/Friends"

export type SearchInputType = {
  searchInput: string
  setSearchInput: React.Dispatch<React.SetStateAction<string>>
}

export const SearchContext = React.createContext<SearchInputType>({} as SearchInputType)

const App = () => {
  const [searchInput, setSearchInput] = React.useState("")
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
      <SearchContext.Provider value={{ searchInput, setSearchInput }}>
        <Header />
        <NavBar />
        <Switch>
          <Route path="/profile/:userID?" render={() => <ProfileContainer />} />
          <Route path="/dialogs/" render={() => <DialogsContainer />} />
          <Route path="/users" component={UsersContainer} />
          <Route path="/login" component={Login} />
          <Route path="/" exact component={ProfileContainer} />
          <Route path="/friends" component={Friends} />
          <Route path="*" render={() => <div>404 Not Found</div>} />
        </Switch>
      </SearchContext.Provider>
    </div>
  )
}

export default App
