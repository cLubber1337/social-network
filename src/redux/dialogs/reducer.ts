import { DialogsActionType, MessagesType, MyMessagesType } from "redux/dialogs/types"
import { v1 } from "uuid"

type InitialStateType = typeof initialState

let initialState = {
  messages: [
    { id: 1, message: "Hi!" },
    { id: 2, message: "How do you do?" },
  ] as MessagesType[],
  myMessages: [{ id: v1(), myMessages: "Hi! I am fine and you?" }] as MyMessagesType[],
}

const dialogsPageReducer = (
  state: InitialStateType = initialState,
  action: DialogsActionType
): InitialStateType => {
  switch (action.type) {
    case "SEND-MESSAGE": {
      let newMessage: MyMessagesType = { id: v1(), myMessages: action.newMessageBody }
      return { ...state, myMessages: [...state.myMessages, newMessage] }
    }
    default:
      return state
  }
}
// actions
export const sendMessage = (newMessageBody: string) =>
  ({ type: "SEND-MESSAGE", newMessageBody } as const)

export default dialogsPageReducer
