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

export const DialogItem = (props:DialogItemPropsType) => {
    return (
        <div className={s.dialog}>
            {props.dialogsData.map(m => (
                <NavLink to="dialogs/1"><div key={m.id}>{m.name}</div></NavLink>
                    ))}
        </div>


    )
}