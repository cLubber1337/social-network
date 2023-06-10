import React from "react"
import s from "./Message.module.css"
import { MessagesType, MyMessagesType } from "redux/dialogs"
import { Avatar } from "@mui/material"
import { UsersType } from "redux/users"
import { UserIdContext } from "pages/MessagesPage/MessagesPage"
import { ProfileType } from "redux/profile"
import _ from "lodash"

type Props = {
  messages: MessagesType[]
  myMessages: MyMessagesType[]
  dialogsElements: UsersType[]
  myProfile: ProfileType
}

export const Message = ({ messages, dialogsElements, myMessages, myProfile }: Props) => {
  const { userId } = React.useContext(UserIdContext)
  let photo: string =
    "https://social-network.samuraijs.com/activecontent/images/users/27740/user.jpg?v=7"
  let myPhoto: string | undefined =
    "https://social-network.samuraijs.com/activecontent/images/users/27740/user.jpg?v=7"

  if (!_.isUndefined(dialogsElements)) {
    photo = dialogsElements.filter((d: UsersType) => d.id === userId)[0]?.photos?.small
  }
  if (!_.isUndefined(myProfile)) {
    myPhoto = myProfile.photos?.small
  }

  return (
    <section className={s.messages__section}>
      <div className={s.messages}>
        {messages.map((m) => (
          <div className={s.message} key={m.id}>
            <Avatar sx={{ width: 40, height: 40 }} src={photo} alt="user" />
            {m.message}
          </div>
        ))}
      </div>
      <div className={`${s.messages} ${s.messages__my}`}>
        {myMessages.map((m) => (
          <div className={`${s.message} ${s.message__my}`} key={m.id}>
            <Avatar sx={{ width: 40, height: 40 }} src={myPhoto} alt="user" />
            {m.myMessages}
          </div>
        ))}
      </div>
    </section>
  )
}
