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


type PropsType = {
    state: RootStateType
}
type PostsType = {
    id: number,
    text: string,
    photo: string,
    like: number
}
type DialogsDataType = {
    id: number,
    name: string
}
type MessagesDataType = {
    id: number,
    message: string
}
type ProfilePageType = {
    postsData: PostsType[]
}
type DialogsPageType =  {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
}
type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
}

function App(props:PropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <Route path="/profile" render={()=><Profile
                    posts={props.state.profilePage.postsData}
                />}/>

                <Route path="/dialogs/" render={()=> <Dialogs
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
