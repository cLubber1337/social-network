import React from "react"
import s from "./Message.module.css"
import { MessagesType } from "redux/dialogs"

type Props = {
  messages: MessagesType[]
}

export const Message = ({ messages }: Props) => {
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
