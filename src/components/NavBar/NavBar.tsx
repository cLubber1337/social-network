import React from 'react';
import s from "./NavBar.module.css"
import profile from "./icon/profile.png";
import chat from "./icon/chat.png";
import news from "./icon/news.png";
import settings from "./icon/settings.png";
import music from "./icon/music.png";


export const NavBar = () => {
    return (
        <div className={s.NavBar}>
            <ul>
                <li>
                    <img src={profile} alt="profile"/>
                    <span>Profile</span>
                </li>
                <li>
                    <img src={chat} alt="chat"/>
                    <span>Messages</span>
                </li>
                <li>
                    <img src={news} alt="news"/>
                    <span>News</span>
                </li>
                <li>
                    <img src={music} alt="music"/>
                    <span>Music</span>
                </li>
                <li>
                    <img src={settings} alt="settings"/>
                    <span>Settings</span>
                </li>

            </ul>
        </div>
    )
}