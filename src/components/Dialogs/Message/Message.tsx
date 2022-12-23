import React from 'react';
import s from "./Message.module.css"

type MessagePropsType = {
    messagesData: messagesData[]
}
type messagesData = {
    id: number,
    message: string
}

export const Message = (props:MessagePropsType) => {
    return (
        <div className={s.allMessages}>
            {props.messagesData.map(m =>(
                <div className={s.message} key={m.id}>
                    {m.message}
                </div>))}
        </div>
    )
}