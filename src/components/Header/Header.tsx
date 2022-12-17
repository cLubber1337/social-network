import React from 'react';
import logo from './mylogo.png'
import s from "./Header.module.css"

export const Header = () => {
    return (
        <div className={s.header}>
            <img src={logo} alt="logo" className={s.logo}/>
        </div>
)
}