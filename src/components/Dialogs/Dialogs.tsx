import React from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType} from "../../redux/dialogsPage-reducer";
import {Redirect} from "react-router-dom";

type PropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
    updateNewMessageText: (text: string) => void
    addMessage: () => void
    authMe: boolean

}

export const Dialogs: React.FC<PropsType> = ({
                                                 dialogs,
                                                 updateNewMessageText,
                                                 addMessage,
                                                 newMessageText,
                                                 messages,
                                                 authMe
                                             }) => {

    if (!authMe) return <Redirect to={"/login"}/>
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <DialogItem dialogs={dialogs}/>
            </div>


            <div className={s.messages}>
                <Message messages={messages}
                         updateNewMessageText={updateNewMessageText}
                         addMessage={addMessage}
                         newMessageText={newMessageText as string}
                />
            </div>

        </div>
    )
}

