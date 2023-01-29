import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import store, {
    AddMessageActionType,
    AddPostActionType, DialogsPageType,
    RootStateType,
    StoreType,
    UpdateNewMessageTextType,
    UpdateNewPostTextType
} from "./redux/store";


type PropsType = {
    state: RootStateType
    dispatch: (action: AddPostActionType | UpdateNewPostTextType | AddMessageActionType | UpdateNewMessageTextType) => void
}


function App(props: PropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <Route path="/profile" render={() => <Profile store={store}/>}/>

                <Route path="/dialogs/" render={() => <Dialogs store={store}/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
