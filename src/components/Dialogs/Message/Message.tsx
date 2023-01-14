import React, {ChangeEvent, RefObject} from 'react';
import s from "./Message.module.css"
import {
    addMessageActionCreator,
    AddMessageActionType, DialogsPageType, MessagesDataType, updateNewMessageTextActionCreator,
    UpdateNewMessageTextType,
    updateNewPostTextActionCreator
} from "../../../redux/state";

type PropsType = {
    messages: MessagesDataType[]
    dialogsPage: DialogsPageType
    dispatch: (action: AddMessageActionType | UpdateNewMessageTextType) => void
}


export const Message: React.FC<PropsType> = ({messages, dispatch, dialogsPage}) => {

    let messageElement = messages.map(m =>
        (<div className={s.message} key={m.id}>
            {m.message}
        </div>))

    const addMessage = () => {
        dispatch(addMessageActionCreator())
    }
    const onChangeMessage = (e:ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewMessageTextActionCreator(e.currentTarget.value))
    }

    return (
        <div className={s.allMessages}>
            {messageElement}
            <div>
                <textarea value={dialogsPage.newMessageText} onChange={onChangeMessage}></textarea>
                <div>
                    <button onClick={addMessage}>send</button>
                </div>
            </div>
        </div>
    )
}