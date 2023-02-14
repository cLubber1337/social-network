import React from 'react';
import {
    addPost,
    PostType,
    updateNewPostText
} from "../../../redux/profilePage-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/store";
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
            dispatch(updateNewPostText(text))
        },
        addPost: () => {
            dispatch(addPost())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer