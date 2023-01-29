import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/store";


type PropsType = {
    posts: PostsType[]
    newPostText: string
    addPost: () => void
    onPostChange: (text: string) => void
}

export const MyPosts: React.FC<PropsType> = ({posts, newPostText, addPost, onPostChange}) => {

    const onClickAddPost = () => {
        addPost()
    }

    let onChangePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onPostChange(e.currentTarget.value)
    }

    return (
        <div className={s.content}>
            <h3>MY POSTS</h3>
            <div>
                <textarea
                    onChange={onChangePost}
                    value={newPostText}
                />
                <div>
                    <button onClick={onClickAddPost}>Add post</button>
                </div>
            </div>
            <Post posts={posts}/>
        </div>
    )
}