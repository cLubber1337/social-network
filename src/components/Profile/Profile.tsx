import React from 'react';
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div>
            <div className={s.content}>
            <img className={s.profileImg} src="https://cdn.pixabay.com/photo/2021/03/03/08/39/woman-6064799_960_720.jpg" alt="profile"/>
        Description
            </div>
            <MyPosts />

        </div>
)
}