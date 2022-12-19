import React from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={s.content}>
           <h3>MY POSTS</h3>
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