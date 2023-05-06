import React from "react"
import s from "./Post.module.css"
import { useSelector } from "react-redux"
import { getPosts } from "redux/profilePage-reducer"

export const Post = () => {
  const posts = useSelector(getPosts)

  return (
    <div className={s.content}>
      {posts.map(({ id, photo, like, text }) => (
        <div className={s.post} key={id}>
          <div className={s.photoText}>
            <img className={s.photo} src={photo} alt={"userName"} />
            <div className={s.text}>{text}</div>
          </div>
          <div className={s.like}>
            <span>
              <span className={s.icon}>&#10084;</span> {like}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
