import React from "react"
import s from "components/Post/Post.module.css"
import { useSelector } from "react-redux"
import { selectUserPhoto } from "redux/users"
import { selectCurrentUserProfile } from "redux/profile"

type Props = { id: string; text: string; like: number }

export const Post = ({ text, like }: Props) => {
  const userProfile = useSelector(selectCurrentUserProfile)
  const userPhoto = useSelector(selectUserPhoto)
  return (
    <div className={s.post}>
      <div className={s.photoText}>
        <img className={s.photo} src={userProfile?.photos.large || userPhoto} alt={"userPhoto"} />
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
