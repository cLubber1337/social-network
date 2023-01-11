import React from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsDataType, MessagesDataType} from "../../redux/state";

type PropsType = {
    dialogs: DialogsDataType[]
    messages: MessagesDataType[]
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