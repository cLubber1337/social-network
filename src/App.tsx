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
import {AddPostActionType, RootStateType, StoreType, UpdateNewPostTextType} from "./redux/state";


type PropsType = {
    state: RootStateType
    dispatch: (action: AddPostActionType | UpdateNewPostTextType) => void
}


function App(props: PropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <Route path="/profile" render={() => <Profile
                    dispatch={props.dispatch}
                    profilePage={props.state.profilePage}
                />}/>

                <Route path="/dialogs/" render={() => <Dialogs
                    dialogs={props.state.dialogsPage.dialogsData}
                    messages={props.state.dialogsPage.messagesData}
                />}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
