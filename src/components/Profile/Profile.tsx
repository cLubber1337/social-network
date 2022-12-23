import React from 'react';
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type PropsType = {
    posts: PostsType[]
}
type PostsType = {
    id: number,
    text: string,
    photo: string,
    like: number
}


export const Profile = (props: PropsType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPosts posts={props.posts} />
        </div>
)
}