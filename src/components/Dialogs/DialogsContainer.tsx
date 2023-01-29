import React from 'react';
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsPage-reducer";
import {RootStateType} from "../../redux/store";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    dialogsPage:
}


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: (arg0: { type: "ADD-MESSAGE" | "UPDATE-NEW-MESSAGE-TEXT"; newMessage?: string; }) => void) => {
    return {
        updateNewMessageText: () => {
            dispatch(addMessageActionCreator())
        },
        addMessage: (NewMessageText: string) => {
            dispatch(updateNewMessageTextActionCreator(NewMessageText))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;