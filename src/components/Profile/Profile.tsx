import React from "react"
import s from "./Profile.module.css"
import { ProfileInfo } from "./ProfileInfo/ProfileInfo"
import { ProfileType } from "redux/profilePage-reducer"
import { MyPosts } from "components/Profile/MyPosts/MyPosts"

type ProfilePropsType = {
  profile: ProfileType | null
  userStatus: string
  updateStatus: (status: string) => void
  photoLarge: string
}

export const Profile = (props: ProfilePropsType) => {
  return (
    <div className={s.profile}>
      <ProfileInfo {...props} />
      <MyPosts />
    </div>
  )
}
