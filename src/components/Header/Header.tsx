import React from 'react';
import logo from '../../assets/logo.png'
import s from "./Header.module.css"
import LoginMenu from "components/Header/LoginMenu";


export const Header = () => {

    return (
        <div className={s.header}>
            <img src={logo} alt="logo" className={s.logo}/>
            <div className={s.loginBlock}>
                <LoginMenu/>
            </div>
        </div>
    )
}