export type DialogsType = {
    id: number,
    name: string
}
export type MessagesType = {
    id: number,
    message: string
}
type AddMessageActionType = {
    type: "ADD-MESSAGE"
}
type UpdateNewMessageTextType = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    newMessage: string
}
type ActionType = AddMessageActionType |  UpdateNewMessageTextType

export type InitialStateType = typeof initialState

let initialState = {
    newMessageText: "",
    dialogs: [
        {id: 1, name: "Andrey"},
        {id: 2, name: "Zina"},
        {id: 3, name: "Kali"},
        {id: 4, name: "Igor"},
        {id: 5, name: "Henry"},
        {id: 6, name: "Nina"},
    ] as DialogsType[] ,
    messages: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How do you do?"},
        {id: 3, message: "I go to school!"},
        {id: 4, message: "I like play basketball"},
        {id: 5, message: "My name is Henry"},
        {id: 6, message: "What!?????"},
    ] as MessagesType[]
}


const dialogsPageReducer = (state:InitialStateType= initialState, action:ActionType ): InitialStateType => {

    switch (action.type) {
        case "ADD-MESSAGE":
            let newMessage: MessagesType = {id: 6, message: state.newMessageText}
            return {...state, messages: [...state.messages, newMessage],newMessageText: ""}
        case "UPDATE-NEW-MESSAGE-TEXT":
            return  {...state, newMessageText: action.newMessage}
        default:
            return state
    }
}

export const addMessage: () => AddMessageActionType = () => {
    return {type: "ADD-MESSAGE"}
}

export const updateNewMessageText: (text: string) => UpdateNewMessageTextType = (text: string) => {
    return {type: "UPDATE-NEW-MESSAGE-TEXT", newMessage: text}
}

export default dialogsPageReducer