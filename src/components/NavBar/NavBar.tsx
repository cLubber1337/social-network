import React from 'react';
import s from "./NavBar.module.css"
import profile from "./icon/profile.png";
import chat from "./icon/chat.png";
import users from "./icon/users.png";
import news from "./icon/news.png";
import settings from "./icon/settings.png";
import music from "./icon/music.png";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {getCurrentUserProfile} from "redux/profilePage-reducer";
import {getAuthData} from "redux/auth-reducer";

export const NavBar = () => {
    const userProfile = useSelector(getCurrentUserProfile)
    const authData = useSelector(getAuthData)

// 27740
    return (
        <div className={s.NavBar}>
            <ul>
                <NavLink style={{textDecoration: "none"}} activeClassName={ userProfile?.userId === authData.id ?
                    s.active : ""} to={`/`} >
                    <li className={s.item}>
                        <img src={profile} alt="profile"/>
                        <span>My profile</span>
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
                <NavLink style={{textDecoration: "none"}} activeClassName={s.active} to="/users">
                    <li className={s.item}>
                        <img src={users} alt="users"/>
                        <span>Find users</span>
                    </li>
                </NavLink>
            </ul>
            <hr/>
            <span>Friends</span>
            <div className={s.sidebar}>
                <div>
                    <img src={"https://img.freepik.com/free-vector/watercolor-cute-girl-raincoat-holding-umbrella-vector-illustration-white-background_8130-956.jpg?w=900&t=st=1671832719~exp=1671833319~hmac=33b0f4e63fa3981ef3bd1631dbcb587c43c35b2f48259ec137492f9086edf5f1"} alt={""} className={s.photo}/>
                    <div>name</div>
                </div>
                <div>
                    <img src={"https://img.freepik.com/free-vector/watercolor-cute-girl-raincoat-holding-umbrella-vector-illustration-white-background_8130-956.jpg?w=900&t=st=1671832719~exp=1671833319~hmac=33b0f4e63fa3981ef3bd1631dbcb587c43c35b2f48259ec137492f9086edf5f1"} alt={""} className={s.photo}/>
                    <div>name</div>
                </div>

            </div>

        </div>
    )
}