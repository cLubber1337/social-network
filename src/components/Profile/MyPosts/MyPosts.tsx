import React from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";

type PropsType = {
    posts: PostsType[]
}
type PostsType = {
    id: number,
    text: string,
    photo: string,
    like: number
}


export const MyPosts = (props: PropsType) => {
    return (
        <div className={s.content}>
           <h3>MY POSTS</h3>
            <div>
                <textarea></textarea>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <Post posts={props.posts}/>
        </div>
    )
}