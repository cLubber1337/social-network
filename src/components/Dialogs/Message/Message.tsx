import React, {ChangeEvent} from 'react';
import s from "./Message.module.css"
import {DialogsPageType} from "../../../redux/store";

type PropsType = {
    messages: DialogsPageType
    updateNewMessageText: (NewMessageText: string) => void
    addMessage: () => void
    newMessageText: string
}

export const Message: React.FC<PropsType> = ({
                                                 messages, updateNewMessageText,
                                                 addMessage, newMessageText
                                             }) => {
    let messageElement = messages.messagesData.map(m => (<div className={s.message} key={m.id}>{m.message}</div>))
    const onClickAddMessage = () => addMessage()
    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => updateNewMessageText(e.currentTarget.value)
    const button = newMessageText.length === 0


    return (
        <div className={s.allMessages}>
            {messageElement}
            <div>
                <textarea value={newMessageText} onChange={onChangeMessage}></textarea>
                <div>
                    <button disabled={button} onClick={onClickAddMessage}>send</button>
                </div>
            </div>
        </div>
    )
}