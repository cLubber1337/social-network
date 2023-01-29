import {AddMessageActionType, UpdateNewMessageTextType} from "./store";

export type DialogsType = {
    id: number,
    name: string
}
export type MessagesType = {
    id: number,
    message: string
}

export type InitialStateType = typeof initialState

let initialState = {
    newMessageText: "",
    dialogsData: [
        {id: 1, name: "Andrey"},
        {id: 2, name: "Zina"},
        {id: 3, name: "Kali"},
        {id: 4, name: "Igor"},
        {id: 5, name: "Henry"},
        {id: 6, name: "Nina"},
    ] as DialogsType[] ,
    messagesData: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How do you do?"},
        {id: 3, message: "I go to school!"},
        {id: 4, message: "I like play basketball"},
        {id: 5, message: "My name is Henry"},
        {id: 6, message: "What!?????"},
    ] as MessagesType[]
}


const dialogsPageReducer = (state:InitialStateType= initialState,
                            action: AddMessageActionType
                                | UpdateNewMessageTextType): InitialStateType => {

    switch (action.type) {
        case "ADD-MESSAGE":
            let newMessage: MessagesType = {id: 6, message: state.newMessageText}
            state.messagesData.push(newMessage)
            state.newMessageText = ""
            return state
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.newMessage
            return state
        default:
            return state
    }
}

export const addMessageActionCreator: () => AddMessageActionType = () => {
    return {type: "ADD-MESSAGE"}
}

export const updateNewMessageTextActionCreator: (text: string) => UpdateNewMessageTextType = (text: string) => {
    return {type: "UPDATE-NEW-MESSAGE-TEXT", newMessage: text}
}

export default dialogsPageReducer