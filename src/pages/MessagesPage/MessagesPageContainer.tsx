import React, { ComponentType } from "react"
import { connect } from "react-redux"
import { MessagesPage } from "pages/MessagesPage/MessagesPage"
import { sendMessage } from "redux/dialogs/reducer"
import { AppStateType } from "redux/store"
import { compose } from "redux"
import withAuthRedirect from "hoc/withAuthRedirect"
import { MessagesType, MyMessagesType } from "redux/dialogs"

type MapStateToPropsType = {
  messages: MessagesType[]
  myMessages: MyMessagesType[]
  authMe: boolean
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    messages: state.dialogPage.messages,
    myMessages: state.dialogPage.myMessages,
    authMe: state.authorization.isAuth,
  }
}

export default compose<ComponentType>(
  connect(mapStateToProps, { sendMessage }),
  withAuthRedirect
)(MessagesPage)
