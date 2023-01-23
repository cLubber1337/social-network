import {AddMessageActionType, DialogsPageType, MessagesDataType, UpdateNewMessageTextType} from "./state";


const dialogsPageReducer = (state: DialogsPageType, action: AddMessageActionType | UpdateNewMessageTextType) => {

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