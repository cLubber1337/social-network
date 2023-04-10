import React, {useEffect} from 'react';
import './App.css';
import {NavBar} from "components/NavBar/NavBar";
import {Route} from "react-router-dom";
import {News} from "components/News/News";
import {Music} from "components/Music/Music";
import {Settings} from "components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Login} from "components/Login/Login";
import {Header} from "components/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {getInitialized, initialize} from "redux/app-reducer";
import Preloader from "components/common/Preloader";


const App = () => {
    const dispatch = useDispatch()
    const initialized = useSelector(getInitialized)

    useEffect(() => {
        dispatch(initialize())
    }, [])


    if (!initialized) return <div className={"preloader"}><Preloader/></div>
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <Route path="/profile/:userID?" render={() => <ProfileContainer/>}/>
            <Route path="/dialogs/" render={() => <DialogsContainer/>}/>
            <Route path="/news" component={News}/>
            <Route path="/music" component={Music}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/users" component={UsersContainer}/>
            <Route path="/login" component={Login}/>
            <Route path="/" exact component={ProfileContainer}/>
        </div>
    );
}

export default App;
