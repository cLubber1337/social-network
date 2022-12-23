import React from 'react';
import s from "./ProfileInfo.module.css"

export const ProfileInfo = () => {
    return (
        <div>
            <div className={s.content}>
            <img className={s.profileImg} src="https://img.freepik.com/premium-vector/portrait-young-man-avatar-guy-social-networks-abstract-male-portrait-full-face-isolated-illustration-flat-style_276162-44.jpg?w=826"/>
        Description
            </div>
        </div>
)
}