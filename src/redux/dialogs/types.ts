import { sendMessage } from "redux/dialogs/reducer"

export type DialogsType = {
  id: number
  name: string
}
export type MessagesType = {
  id: number
  message: string
}
type sendMessageActionType = ReturnType<typeof sendMessage>
export type DialogsActionType = sendMessageActionType
