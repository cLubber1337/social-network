import React, { memo } from "react"
import styles from "components/MyPosts/MyPosts.module.css"
import { Post } from "components/Post/Post"
import { reduxForm } from "redux-form"
import { FormDataForPostType, PostForm } from "components/MyPosts/PostForm"
import { useDispatch, useSelector } from "react-redux"
import { addPost } from "redux/profile/reducer"
import { selectPosts } from "redux/profile"

const PostReduxForm = reduxForm<FormDataForPostType>({ form: "post" })(PostForm)

export const MyPosts = memo(() => {
  const dispatch = useDispatch()
  const posts = useSelector(selectPosts)

  const onAddPost = (formData: FormDataForPostType) => {
    dispatch(addPost(formData.post))
    formData.post = ""
  }

  return (
    <section className={`${styles.my__posts}`}>
      <div className={styles.my__posts__form}>
        <h3 className={styles.my__posts__form__title}>My posts</h3>
        <div>
          <PostReduxForm onSubmit={onAddPost} />
        </div>
      </div>
      <div className={styles.posts}>
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </section>
  )
})
