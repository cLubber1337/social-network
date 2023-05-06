import React from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostType} from "redux/profilePage-reducer";
import {reduxForm} from "redux-form";
import {FormDataForPostType, PostForm} from "./PostForm";

type PropsType = {
    posts: PostType[]
    addPost: (post: string) => void
}

export const MyPosts = ({posts, addPost} : PropsType) => {
    const onAddPost = (formData: FormDataForPostType) => {
        addPost(formData.post)
    }

    return (
        <div className={s.content}>
            <h3>My posts</h3>
            <div>
                <PostReduxForm onSubmit={onAddPost}/>
            </div>
            <Post posts={posts}/>
        </div>
    )
}


const PostReduxForm = reduxForm<FormDataForPostType>({form: "post"})(PostForm)