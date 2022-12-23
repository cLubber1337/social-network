import React from 'react';
import s from "./Post.module.css"
import {postsType} from "../../../../index";

type postType = { postsData: postsType[] }


export const Post = (props: postType) => {
    return (
        <div className={s.content}>
            {props.postsData.map(m => (
                <div className={s.post} key={m.id}>
                    <div className={s.photoText}>
                        <img className={s.photo} src={m.photo}/>
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