import React from "react"
import s from "./Message.module.css"
import { MessagesType } from "redux/dialogs"

type PropsType = {
  messages: MessagesType[]
}

export const Message: React.FC<PropsType> = ({ messages }) => {
  return (
    <div className={s.allMessages}>
      {messages.map((m) => (
        <div className={s.message} key={m.id}>
          {m.message}
        </div>
      ))}
    </div>
  )
}
