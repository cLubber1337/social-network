import { sendMessage } from "redux/dialogs/reducer"

export type MessagesType = {
  id: number
  message: string
}
export type MyMessagesType = {
  id: string
  myMessages: string
}

type sendMessageActionType = ReturnType<typeof sendMessage>
export type DialogsActionType = sendMessageActionType
