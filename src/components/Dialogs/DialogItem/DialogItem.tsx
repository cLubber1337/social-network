import React from 'react';
import s from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    dialogsData: dialogsData[]
}
type dialogsData = {
    id: number,
    name: string
}

export const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.dialogItem}>
            {props.dialogsData.map(m => (
                <NavLink className={s.name} key={m.id} to="dialogs/1">
                    <div>{m.name}</div>
                </NavLink>))}
        </div>

    )
}