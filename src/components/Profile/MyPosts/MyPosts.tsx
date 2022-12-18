import React from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={s.content}>
            MY POSTS
            <div>
                <textarea></textarea>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <Post/>
            <Post/>
        </div>
    )
}