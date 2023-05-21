import React, { memo } from "react"
import s from "./MyPosts.module.css"
import { Post } from "./Post/Post"
import { reduxForm } from "redux-form"
import { FormDataForPostType, PostForm } from "./PostForm"
import { useDispatch } from "react-redux"
import { addPost } from "redux/profile/reducer"

const PostReduxForm = reduxForm<FormDataForPostType>({ form: "post" })(PostForm)

export const MyPosts = memo(() => {
  const dispatch = useDispatch()

  const onAddPost = (formData: FormDataForPostType) => {
    dispatch(addPost(formData.post))
    formData.post = ""
  }

  return (
    <div className={s.content}>
      <h3>My posts</h3>
      <div>
        <PostReduxForm onSubmit={onAddPost} />
      </div>
      <Post />
    </div>
  )
})
