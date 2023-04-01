import React from 'react';
import s from "./Music.module.css"
import Clock from "../common/Clock";
import {useSelector} from "react-redux";
import {getIsAuth} from "redux/auth-reducer";
import {Redirect} from "react-router-dom";

export const Music = () => {
    const isAuth = useSelector(getIsAuth)
    if (!isAuth) return <Redirect to={"/login"}/>
    return (
        <div className={s.content}>
            <Clock/>
        </div>
)
}