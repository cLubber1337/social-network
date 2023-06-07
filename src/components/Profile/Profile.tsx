import React from "react"
import styles from "./Profile.module.css"
import { ProfileInfo } from "./ProfileInfo/ProfileInfo"
import { MyPosts } from "components/Profile/MyPosts/MyPosts"
import { ProfileType } from "redux/profile"

type ProfilePropsType = {
  profile: ProfileType | null
  userStatus: string
  updateStatus: (status: string) => void
  photoLarge: string
}

export const Profile = (props: ProfilePropsType) => {
  return (
    <section className={`${styles.profile__section} content`}>
      <ProfileInfo {...props} />
      <MyPosts />
    </section>
  )
}
