import React from 'react';
import s from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "redux/profilePage-reducer";

type ProfilePropsType = {
    profile: ProfileType | null
    userStatus: string
    updateStatus: (status: string) => void
    photoLarge: string
}

export const Profile: React.FC<ProfilePropsType> = (props: ProfilePropsType) => {

    return (
        <div className={s.profile}>
            <ProfileInfo {...props} />
            <MyPostsContainer/>
        </div>
    )
}