import React from 'react';
import s from "./Post.module.css"
import {ProfilePageType} from "../../../../redux/state";

type PropsType = {
    posts: ProfilePageType
}

export const Post = (props: PropsType) => {
    return (
        <div className={s.content}>
            {props.posts.postsData.map(m => (
                <div className={s.post} key={m.id}>
                    <div className={s.photoText}>
                        <img className={s.photo} src={m.photo} alt={"userName"}/>
                        <div className={s.text}>
                            {m.text}
                        </div>
                    </div>
                    <div className={s.like}>
                        <span>
                           <span className={s.icon}>&#10084;</span>  {m.like}
                        </span>
                    </div>
                </div>

            ))}
        </div>
    )
}