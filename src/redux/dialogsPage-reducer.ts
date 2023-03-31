export type DialogsType = {
    id: number,
    name: string
}
export type MessagesType = {
    id: number,
    message: string
}
type sendMessageActionType = ReturnType<typeof sendMessage>
type ActionType = sendMessageActionType
type InitialStateType = typeof initialState

let initialState = {
    dialogs: [
        {id: 1, name: "Andrey"},
        {id: 2, name: "Zina"},
        {id: 3, name: "Kali"},
        {id: 4, name: "Igor"},
        {id: 5, name: "Henry"},
        {id: 6, name: "Nina"},
    ] as DialogsType[],
    messages: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How do you do?"},
        {id: 3, message: "I go to school!"},
        {id: 4, message: "I like play basketball"},
        {id: 5, message: "My name is Henry"},
        {id: 6, message: "What!?????"},
    ] as MessagesType[]
}

const dialogsPageReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case "SEND-MESSAGE": {
            let newMessage: MessagesType = {id: 7, message: action.newMessageBody}
            return {...state, messages: [...state.messages, newMessage]}
        }
        default:
            return state
    }
}

export const sendMessage = (newMessageBody: string) => ({type: "SEND-MESSAGE", newMessageBody} as const)

export default dialogsPageReducer