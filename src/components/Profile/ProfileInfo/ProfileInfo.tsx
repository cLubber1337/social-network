import React from 'react';
import s from "./ProfileInfo.module.css"

export const ProfileInfo = () => {
    return (
        <div>
            <div className={s.content}>
            <img className={s.profileImg} src="https://cdn.pixabay.com/photo/2021/03/03/08/39/woman-6064799_960_720.jpg" alt="profile"/>
        Description
            </div>
        </div>
)
}