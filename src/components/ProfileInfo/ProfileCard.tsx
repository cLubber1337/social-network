import React, { memo, useState } from "react"
import styles from "components/ProfileInfo/ProfileInfo.module.css"
import ProfileStatus from "components/ProfileStatus/ProfileStatus"
import { useSelector } from "react-redux"
import { selectCurrentUserProfile } from "redux/profile"
import { selectAuthData } from "redux/auth"
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto"
import { profileAPI } from "api/api"

type ProfileInfoType = {
  userStatus: string
  updateStatus: (status: string) => void
  photoLarge: string
}

export const ProfileCard = memo(({ userStatus, updateStatus, photoLarge }: ProfileInfoType) => {
  const userProfile = useSelector(selectCurrentUserProfile)
  const authData = useSelector(selectAuthData)
  const [photo, setPhoto] = useState<string>()

  const handleEditPhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0]
    if (!file) return

    const response = await profileAPI.updatePhoto(file)
    if (response.data.resultCode === 0) {
      setPhoto(response.data.data.photos.large)
    } else {
      alert(response.data.messages[0])
    }
  }

  return (
    <section className={styles.profile__card__section}>
      <div className={styles.profile__card}>
        {userProfile !== null && (
          <div className={styles.profile__card__img}>
            <img src={photo || userProfile.photos.large || photoLarge} alt="imageUser" />

            <label htmlFor="edit-photo">
              <div
                className={styles.profile__card__img__edit}
                onClick={(e: React.MouseEvent<HTMLInputElement>) => e.stopPropagation()}
              >
                <AddAPhotoIcon />
              </div>
              <input
                id="edit-photo"
                type="file"
                accept="image/*"
                onChange={handleEditPhoto}
                style={{ display: "none" }}
              />
            </label>
          </div>
        )}

        {userProfile !== null && (
          <div className={styles.profile__card__info}>
            <div className={styles.profile__card__left}>
              <p className={styles.item}>
                <span className={styles.item__name}>ID: </span>
                {userProfile.userId}
              </p>
              <p className={styles.item}>
                <span className={styles.item__name}>Name: </span>
                {userProfile.fullName}
              </p>
              <p className={styles.item}>
                <span className={styles.item__name}>About Me: </span>
                {userProfile.aboutMe}
              </p>
              <p className={styles.item}>
                <span className={styles.item__name}>Looking for a job: </span>
                {userProfile.lookingForAJob ? "Yes" : "No"}
              </p>
              <p className={styles.item}>
                <span className={styles.item__name}>Looking for a job description: </span>
                {userProfile.lookingForAJobDescription}
              </p>
            </div>
            <div className={styles.profile__card__right}>
              <h2>Contacts: </h2>
              <p className={styles.item}>
                <span className={styles.item__name}>Facebook: </span>
                {userProfile.contacts.facebook}
              </p>
              <p className={styles.item}>
                <span className={styles.item__name}>VK: </span>
                {userProfile.contacts.vk}
              </p>
              <p className={styles.item}>
                <span className={styles.item__name}>Github: </span>
                {userProfile.contacts.github}
              </p>
              <p className={styles.item}>
                <span className={styles.item__name}>Twitter: </span>
                {userProfile.contacts.twitter}
              </p>
              <p className={styles.item}>
                <span className={styles.item__name}>Instagram: </span>
                {userProfile.contacts.instagram}
              </p>
              <p className={styles.item}>
                <span className={styles.item__name}>Youtube: </span>
                {userProfile.contacts.youtube}
              </p>
              <p className={styles.item}>
                <span className={styles.item__name}>Website: </span>
                {userProfile.contacts.website}
              </p>
              <p className={styles.item}>
                <span className={styles.item__name}>Main link: </span>
                {userProfile.contacts.mainLink}
              </p>
            </div>
          </div>
        )}
      </div>
      <ProfileStatus
        updateStatus={updateStatus}
        userProfile={userProfile}
        authData={authData}
        userStatus={userStatus}
      />
    </section>
  )
})
