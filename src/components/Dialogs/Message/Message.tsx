import React from 'react';
import s from "./Message.module.css"

type PropsType = {
    messages: MessagesDataType[]
}
type MessagesDataType = {
    id: number,
    message: string
}

export const Message = (props:PropsType) => {
    return (
        <div className={s.allMessages}>
            {props.messages.map(m =>(
                <div className={s.message} key={m.id}>
                    {m.message}
                </div>))}
        </div>
    )
}