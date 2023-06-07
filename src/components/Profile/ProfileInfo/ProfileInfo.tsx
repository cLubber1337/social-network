import React, { memo } from "react"
import styles from "./ProfileInfo.module.css"
import ProfileStatus from "../ProfileStatus/ProfileStatus"
import { useSelector } from "react-redux"
import { selectCurrentUserProfile } from "redux/profile"
import { selectAuthData } from "redux/auth"

type ProfileInfoType = {
  userStatus: string
  updateStatus: (status: string) => void
  photoLarge: string
}

export const ProfileInfo = memo(({ userStatus, updateStatus, photoLarge }: ProfileInfoType) => {
  const userProfile = useSelector(selectCurrentUserProfile)
  const authData = useSelector(selectAuthData)

  return (
    <div>
      <div className={styles.profile__info}>
        <div>
          {userProfile !== null && (
            <img
              className={styles.profile__info__img}
              src={userProfile.photos.small !== null ? userProfile.photos.small : photoLarge}
              alt="imageUser"
            />
          )}
        </div>

        <ProfileStatus
          userStatus={userStatus}
          updateStatus={updateStatus}
          userProfile={userProfile}
          authData={authData}
        />
      </div>
    </div>
  )
})
