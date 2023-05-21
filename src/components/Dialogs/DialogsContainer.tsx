import React, { ComponentType } from "react"
import { connect } from "react-redux"
import { Dialogs } from "./Dialogs"
import { sendMessage } from "redux/dialogs/reducer"
import { AppStateType } from "redux/store"
import { compose } from "redux"
import withAuthRedirect from "hoc/withAuthRedirect"
import { DialogsType, MessagesType } from "redux/dialogs"

type MapStateToPropsType = {
  dialogs: DialogsType[]
  messages: MessagesType[]
  authMe: boolean
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    dialogs: state.dialogPage.dialogs,
    messages: state.dialogPage.messages,
    authMe: state.authorization.isAuth,
  }
}

export default compose<ComponentType>(
  connect(mapStateToProps, { sendMessage }),
  withAuthRedirect
)(Dialogs)
