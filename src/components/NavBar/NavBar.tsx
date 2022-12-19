import React from 'react';
import s from "./NavBar.module.css"
import profile from "./icon/profile.png";
import chat from "./icon/chat.png";
import news from "./icon/news.png";
import settings from "./icon/settings.png";
import music from "./icon/music.png";
import {NavLink} from "react-router-dom";


export const NavBar = () => {
    return (
        <div className={s.NavBar}>
            <ul>
                <NavLink style={{textDecoration: "none"}} activeClassName={s.active} to="/profile">
                    <li className={s.item}>
                        <img src={profile} alt="profile"/>
                        <span>Profile</span>
                    </li>
                </NavLink>
                <NavLink style={{textDecoration: "none"}} activeClassName={s.active} to="/dialogs">
                    <li className={s.item}>
                        <img src={chat} alt="chat"/>
                        <span>Messages</span>
                    </li>
                </NavLink>
                <NavLink style={{textDecoration: "none"}} activeClassName={s.active} to="/news">
                    <li className={s.item}>
                        <img src={news} alt="news"/>
                        <span>News</span>
                    </li >
                </NavLink>
                <NavLink style={{textDecoration: "none"}} activeClassName={s.active} to="/music">
                    <li className={s.item}>
                        <img src={music} alt="music"/>
                        <span>Music</span>
                    </li>
                </NavLink>
                <NavLink style={{textDecoration: "none"}} activeClassName={s.active} to="/settings">
                    <li className={s.item}>
                        <img src={settings} alt="settings"/>
                        <span>Settings</span>
                    </li>
                </NavLink>
            </ul>
        </div>
    )
}