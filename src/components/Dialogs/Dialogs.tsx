import React from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType} from "../../redux/dialogsPage-reducer";

type PropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
    updateNewMessageText: (text: string) => void
    addMessage: () => void

}

export const Dialogs: React.FC<PropsType> = ({
                                                 dialogs,
                                                 updateNewMessageText,
                                                 addMessage,
                                                 newMessageText,
                                                 messages

                                             }) => {
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

