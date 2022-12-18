import React from 'react';
import s from "./Post.module.css"



export const Post = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.ava}
                     src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?auto=format&h=200"/>
                POST
            </div>
            <div>
                <span>like</span>
            </div>
        </div>
    )
}