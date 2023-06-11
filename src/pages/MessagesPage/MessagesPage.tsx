import React, { useEffect, useState } from "react"
import { Dialogs } from "components/Dialogs/Dialogs/Dialogs"
import { Message } from "components/Dialogs/Message/Message"
import { DialogsType, MessagesType, MyMessagesType } from "redux/dialogs"
import { UsersType } from "redux/users"
import { profileAPI, usersAPI } from "api/api"
import { reduxForm } from "redux-form"
import {
  AddMessageForm,
  FormDataForAddMessageType,
} from "components/Dialogs/AddMessageForm/AddMessageForm"
import { useSelector } from "react-redux"
import { selectAuthData } from "redux/auth"
import { ProfileType } from "redux/profile"

type PropsType = {
  dialogs: DialogsType[]
  messages: MessagesType[]
  sendMessage: (newMessageBody: string) => void
  myMessages: MyMessagesType[]
  authMe: boolean
}

export type UserIdType = {
  userId: number
  setUserId: React.Dispatch<React.SetStateAction<number>>
}

export const UserIdContext = React.createContext<UserIdType>({} as UserIdType)

export const MessagesPage = ({ dialogs, sendMessage, messages, myMessages }: PropsType) => {
  const [dialogsElements, setDialogsElements] = useState<UsersType[]>([])
  const [myProfile, setMyProfile] = useState<ProfileType>({} as ProfileType)
  const authData = useSelector(selectAuthData)
  const [userId, setUserId] = React.useState<number>(2)

  const addNewMessage = (formData: FormDataForAddMessageType) => {
    sendMessage(formData.newMessageBody)
    formData.newMessageBody = ""
  }
  const getMyProfile = async () => {
    try {
      let { data } = await profileAPI.getProfile(String(authData.id))
      if (data) {
        setMyProfile(data)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const getDialogsElements = async () => {
    try {
      let { items } = await usersAPI.getFriends(1, 8, "")
      if (items) {
        setDialogsElements(items)
        setUserId(items[0].id)
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getDialogsElements()
        await getMyProfile()
      } catch (e) {
        console.log(e)
      }
    }
    if (dialogsElements.length === 0) {
      fetchData()
    }
  }, [dialogsElements.length])

  return (
    <section className={`content`}>
      <UserIdContext.Provider value={{ userId, setUserId }}>
        {dialogsElements && myProfile && (
          <>
            <div className={`messages-page`}>
              <Dialogs dialogs={dialogs} dialogsElements={dialogsElements} />
              <Message
                messages={messages}
                dialogsElements={dialogsElements}
                myMessages={myMessages}
                myProfile={myProfile}
              />
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
          </>
        )}
      </UserIdContext.Provider>
    </section>
  )
}
const AddMessageFormRedux = reduxForm<FormDataForAddMessageType>({ form: "newMessageBody" })(
  AddMessageForm
)
