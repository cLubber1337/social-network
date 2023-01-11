import React from 'react';
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AddPostActionType, ProfilePageType, UpdateNewPostTextType} from "../../redux/state";


type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: AddPostActionType | UpdateNewPostTextType) => void
}

export const Profile = (props: PropsType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPosts
                dispatch={props.dispatch}
                posts={props.profilePage}
            />
        </div>
)
}