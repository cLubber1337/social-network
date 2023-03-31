import React from 'react';
import style from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType} from "redux/dialogsPage-reducer";
import {reduxForm} from "redux-form";
import {AddMessageForm, FormDataForAddMessageType} from "./AddMessageForm";

type PropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    sendMessage: (newMessageBody: string) => void
    authMe: boolean
}

export const Dialogs: React.FC<PropsType> = ({
                                                 dialogs,
                                                 sendMessage,
                                                 messages,
                                             }) => {

    const addNewMessage = (formData: FormDataForAddMessageType) => {
        sendMessage(formData.newMessageBody)
    }
    // if (!authMe) return <Redirect to={"/login"}/>
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem dialogs={dialogs}/>
            </div>
            <div className={style.messages}>
                <Message messages={messages}/>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}
const AddMessageFormRedux = reduxForm<FormDataForAddMessageType>({form: "newMessageBody"})(AddMessageForm)
