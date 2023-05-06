import React from "react"
import s from "./Message.module.css"
import { MessagesType } from "redux/dialogsPage-reducer"

type PropsType = {
  messages: MessagesType[]
}

export const Message: React.FC<PropsType> = ({ messages }) => {
  let messageElement = messages.map((m) => (
    <div className={s.message} key={m.id}>
      {m.message}
    </div>
  ))

  return <div className={s.allMessages}>{messageElement}</div>
}
