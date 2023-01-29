import React from 'react';
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {
    addMessageActionCreator,
    InitialStateType,
    updateNewMessageTextActionCreator
} from "../../redux/dialogsPage-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    dialogsPage: InitialStateType
    newMessageText: string
}
type MapDispatchToProps = {
    updateNewMessageText: (NewMessageText: string) => void
    addMessage: () => void
}

let mapStateToProps = (state: AppStateType ) : MapStateToPropsType => {
    return {
        dialogsPage: state.dialogPage,
        newMessageText: state.dialogPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        updateNewMessageText: (NewMessageText: string) => {
            dispatch(updateNewMessageTextActionCreator(NewMessageText))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;