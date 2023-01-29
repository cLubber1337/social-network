import React from 'react';
import {
    addPostActionCreator,
    PostType,
    updateNewPostTextActionCreator
} from "../../../redux/profilePage-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    posts: PostType[]
    newPostText: string
}
type MapDispatchToProps = {
    onPostChange: (text: string) => void
    addPost: () => void
}

const mapStateToProps = (state: AppStateType) : MapStateToPropsType  => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch) : MapDispatchToProps => {
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