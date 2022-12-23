import React from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = () => {
    type dialogsDataType = {
        id: number,
        name: string
    }
    type messagesDataType = {
        id: number,
        message: string
    }

    let dialogsData: dialogsDataType[] = [
        {id: 1, name: "Andrey"},
        {id: 2, name: "Zina"},
        {id: 3, name: "Kali"},
        {id: 4, name: "Igor"},
        {id: 5, name: "Henry"},
        {id: 6, name: "Nina"},
    ]

    let messagesData: messagesDataType[] = [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How do you do?"},
        {id: 3, message: "I go to school!"},
        {id: 4, message: "I like play basketball"},
        {id: 5, message: "My name is AbubaBaba"},
        {id: 6, message: "What!?????"},
    ]

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <DialogItem dialogsData={dialogsData}/>
            </div>

            <div className={s.messages}>
                <Message messagesData={messagesData}/>
            </div>

        </div>
    )
}