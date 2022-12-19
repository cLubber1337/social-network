import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Andrey" id={1}/>
                <DialogItem name="Zina" id={2}/>
                <DialogItem name="Kali" id={3}/>
                <DialogItem name="Igor" id={4}/>
                <DialogItem name="Nina" id={5}/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How do you do?"/>
                <Message message="I go to school!"/>
                <Message message="My name is AbubaBaba"/>
                <Message message="What!?????"/>
            </div>
        </div>
    )
}