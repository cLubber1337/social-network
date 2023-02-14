import React from 'react';
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {addMessage, DialogsType, MessagesType, updateNewMessageText} from "../../redux/dialogsPage-reducer";
import {AppStateType} from "../../redux/store";


type MapStateToPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}

let mapStateToProps = (state: AppStateType ) : MapStateToPropsType => {
    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
        newMessageText: state.dialogPage.newMessageText
    }
}

const DialogsContainer = connect(mapStateToProps, {updateNewMessageText, addMessage})(Dialogs)


export default DialogsContainer;