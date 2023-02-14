import React from 'react';
import s from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profilePage-reducer";

type ProfilePropsType = {
    profile: ProfileType
}

export const Profile: React.FC<ProfilePropsType> = ({profile}) => {
    return (
        <div className={s.profile}>
            <ProfileInfo profile={profile} />
            <MyPostsContainer/>
        </div>
    )
}