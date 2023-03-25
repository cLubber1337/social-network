import React, {FC} from 'react';
import logo from '../../assets/logo.png'
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {AuthStateType} from "../../redux/auth-reducer";

export const Header: FC<AuthStateType> = ({data, isAuth}) => {

    return (
        <div className={s.header}>
            <img src={logo} alt="logo" className={s.logo}/>
            <span className={s.loginBlock}>
                <NavLink className={s.loginLink} to={"/login"}>
                    {
                        isAuth ? data.login : "Login"
                    }
                </NavLink>
            </span>
        </div>
    )
}