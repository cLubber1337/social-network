import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {addMessage, DialogsType, MessagesType, updateNewMessageText} from "../../redux/dialogsPage-reducer";
import {AppStateType} from "../../redux/store";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type MapStateToPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
    authMe: boolean
}
type MapDispatchPropsType = {
    updateNewMessageText: (text: string) => void
    addMessage: () => void
}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
        newMessageText: state.dialogPage.newMessageText,
        authMe: state.authorization.isAuth
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {updateNewMessageText, addMessage}),
    withAuthRedirect
)(Dialogs)

