import React from 'react';
import {
    addPost,
    PostType,
} from "redux/profilePage-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "redux/store";

type MapStateToPropsType = {
    posts: PostType[]
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.postsData,
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts)
export default MyPostsContainer