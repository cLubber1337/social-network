import React, {ChangeEvent} from 'react';
import {StoreType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profilePage-reducer";
import {MyPosts} from "./MyPosts";

type PropsType = {
    store: StoreType
}

export const MyPostsContainer: React.FC<PropsType> = ({store}) => {

    let state = store.getState()

    const addPost = () => {
        store.dispatch(addPostActionCreator())
    }

    let onPostChange = (e: string) => {
        store.dispatch(updateNewPostTextActionCreator(e))
    }

    return (
        <div>
            <MyPosts posts={state.profilePage.postsData}
                     newPostText={state.profilePage.newPostText}
                     addPost={addPost}
                     onPostChange={onPostChange}
            />
        </div>
    )
}