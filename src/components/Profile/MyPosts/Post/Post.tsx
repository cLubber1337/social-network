import React from "react"
import s from "./Post.module.css"

type Props = { id: number; text: string; photo: string; like: number }

export const Post = ({ id, text, like, photo }: Props) => {
  return (
    <div className={s.post}>
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
  )
}
