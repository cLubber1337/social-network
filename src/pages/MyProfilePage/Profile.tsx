import React from "react"
import styles from "pages/MyProfilePage/Profile.module.css"
import { ProfileCard } from "components/ProfileCard/ProfileCard"
import { MyPosts } from "components/MyPosts/MyPosts"
import { ProfileType } from "redux/profile"
import { useSelector } from "react-redux"
import { selectAuthData } from "redux/auth"

type ProfilePropsType = {
  profile: ProfileType | null
  userStatus: string
  updateStatus: (status: string) => void
  photoLarge: string
}

export const Profile = (props: ProfilePropsType) => {
  const authData = useSelector(selectAuthData)
  return (
    <section className={`${styles.profile__section} content`}>
      <ProfileCard {...props} />
      {authData.id === props.profile?.userId && <MyPosts />}
    </section>
  )
}
