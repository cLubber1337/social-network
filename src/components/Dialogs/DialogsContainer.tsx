import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {sendMessage, DialogsType, MessagesType} from "redux/dialogsPage-reducer";
import {AppStateType} from "redux/store";
import {compose} from "redux";

type MapStateToPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    authMe: boolean
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
        authMe: state.authorization.isAuth
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {sendMessage}),
    // withAuthRedirect
)(Dialogs)

