import React from 'react';
import {AddPostActionType, RootStateType, StoreType, UpdateNewPostTextType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profilePage-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state: RootStateType) => {
    return {
        store: state.dialogsPage,
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: (arg0: { type: "UPDATE-NEW-POST-TEXT" | "ADD-POST"; newText?: string; }) => void) => {
    return {
        onPostChange: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer