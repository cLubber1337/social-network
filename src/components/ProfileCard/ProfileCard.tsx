import React, { memo, useState } from "react"
import styles from "components/ProfileCard/profile-card.module.css"
import ProfileStatus from "components/ProfileStatus/ProfileStatus"
import { useSelector } from "react-redux"
import { selectCurrentUserProfile } from "redux/profile"
import { selectAuthData } from "redux/auth"
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto"
import { profileAPI } from "api/api"
import { ProfileInfo } from "components/ProfileInfo/ProfileInfo"
import { ModalEditProfile } from "components/ModalEditProfile/ModalEditProfile"

type Props = {
  userStatus: string
  updateStatus: (status: string) => void
  photoLarge: string
}

export const ProfileCard = memo(({ userStatus, updateStatus, photoLarge }: Props) => {
  const userProfile = useSelector(selectCurrentUserProfile)
  const authData = useSelector(selectAuthData)
  const [photo, setPhoto] = useState<string>()

  const handleEditPhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files && e.target.files[0]
      if (!file) return
      const response = await profileAPI.updatePhoto(file)
      if (response.data.resultCode === 0) {
        setPhoto(response.data.data.photos.large)
      } else {
        alert(response.data.messages[0])
      }
    } catch (error) {
      console.error("Error updating photo:", error)
      alert("Error updating photo. Please try again later.")
    }
  }

  return (
    <section className={styles.profile__card__section}>
      <div className={styles.profile__card}>
        <div className={styles.profile__card__img}>
          <img src={photo || userProfile?.photos.large || photoLarge} alt="imageUser" />
          {authData.id === userProfile?.userId && (
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
          )}
          {authData.id === userProfile?.userId && <ModalEditProfile userProfile={userProfile} />}
        </div>
        <ProfileInfo userProfile={userProfile} />
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
