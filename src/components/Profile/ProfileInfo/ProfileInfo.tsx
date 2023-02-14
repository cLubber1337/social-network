import React from 'react';
import s from "./ProfileInfo.module.css"
import {ProfileType} from "../../../redux/profilePage-reducer";

type ProfileInfoType = {
    profile: ProfileType
}


export const ProfileInfo: React.FC<ProfileInfoType> = ({profile}) => {
    return (
        <div>
            {/*<img src={profile.photos.large}/>*/}
            <div className={s.content}>
            <img className={s.profileImg} src="https://img.freepik.com/premium-vector/portrait-young-man-avatar-guy-social-networks-abstract-male-portrait-full-face-isolated-illustration-flat-style_276162-44.jpg?w=826"
            alt={"userImg"}
            />
        Description
            </div>
        </div>
)
}