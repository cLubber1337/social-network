import React from 'react';
import s from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {}

export const Profile: React.FC<ProfilePropsType> = () => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}