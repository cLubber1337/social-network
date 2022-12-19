import React from 'react';
import s from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}

export const DialogItem = (props:DialogItemPropsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to="dialogs/1">{props.name}</NavLink>
        </div>


    )
}