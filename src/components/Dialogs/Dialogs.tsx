import React from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

type PropsType = {
    dialogs: DialogsDataType[]
    messages: MessagesDataType[]
}
type DialogsDataType = {
    id: number,
    name: string
}
type MessagesDataType = {
    id: number,
    message: string
}


export const Dialogs = (props:PropsType) => {

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <DialogItem dialogs={props.dialogs}/>
            </div>

            <div className={s.messages}>
                <Message messages={props.messages}/>
            </div>

        </div>
    )
}