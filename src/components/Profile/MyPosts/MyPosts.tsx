import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {
    addPostActionCreator,
    AddPostActionType,
    ProfilePageType,
    updateNewPostTextActionCreator,
    UpdateNewPostTextType
} from "../../../redux/state";

type PropsType = {
    posts: ProfilePageType
    dispatch: (action: AddPostActionType | UpdateNewPostTextType) => void
}



export const MyPosts = (props: PropsType) => {

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextActionCreator(e.currentTarget.value))
    }

    return (
        <div className={s.content}>
            <h3>MY POSTS</h3>
            <div>
                <textarea
                    onChange={onPostChange}
                    value={props.posts.newPostText}
                />
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <Post posts={props.posts}/>
        </div>
    )
}