import {AddMessageActionType, DialogsPageType, MessagesDataType, UpdateNewMessageTextType} from "./store";

let initialState = {
    newMessageText: "",
    dialogsData: [
        {id: 1, name: "Andrey"},
        {id: 2, name: "Zina"},
        {id: 3, name: "Kali"},
        {id: 4, name: "Igor"},
        {id: 5, name: "Henry"},
        {id: 6, name: "Nina"},
    ],
    messagesData: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How do you do?"},
        {id: 3, message: "I go to school!"},
        {id: 4, message: "I like play basketball"},
        {id: 5, message: "My name is AbubaBaba"},
        {id: 6, message: "What!?????"},
    ]
}


const dialogsPageReducer = (state: DialogsPageType = initialState, action: AddMessageActionType | UpdateNewMessageTextType) => {

    switch (action.type) {
        case "ADD-MESSAGE":
            let newMessage: MessagesDataType = {id: 6, message: state.newMessageText}
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