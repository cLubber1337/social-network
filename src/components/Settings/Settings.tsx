import React from 'react';
import s from "./Settings.module.css"
import {useSelector} from "react-redux";
import {getIsAuth} from "redux/auth-reducer";
import {Redirect} from "react-router-dom";

export const Settings = () => {




    const isAuth = useSelector(getIsAuth)
    if (!isAuth) return <Redirect to={"/login"}/>
    return (
        <div className={s.content}>
            <div>News</div>

        </div>
)
}