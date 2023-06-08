import React from "react"
import styles from "pages/MyProfilePage/Profile.module.css"
import { ProfileCard } from "components/ProfileInfo/ProfileCard"
import { MyPosts } from "components/MyPosts/MyPosts"
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
      <ProfileCard {...props} />
      <MyPosts />
    </section>
  )
}
