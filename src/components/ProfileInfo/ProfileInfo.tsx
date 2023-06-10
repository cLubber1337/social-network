import React from "react"
import styles from "./profile-info.module.css"
import { ProfileType } from "redux/profile"

type Props = {
  userProfile: ProfileType | null
}

export const ProfileInfo = ({ userProfile }: Props) => {
  return (
    <div className={styles.profile__info}>
      <div className={styles.profile__info__left}>
        <h2>Personal Info: </h2>
        <p className={styles.item}>
          <span className={styles.item__name}>ID: </span>
          {userProfile?.userId}
        </p>
        <p className={styles.item}>
          <span className={styles.item__name}>Name: </span>
          {userProfile?.fullName}
        </p>
        {userProfile?.aboutMe === "" ||
          (userProfile?.aboutMe !== null && (
            <p className={styles.item}>
              <span className={styles.item__name}>About Me: </span>
              {userProfile?.aboutMe}
            </p>
          ))}
        <p className={styles.item}>
          <span className={styles.item__name}>Looking for a job: </span>
          {userProfile?.lookingForAJob ? "Yes" : "No"}
        </p>
        {userProfile?.lookingForAJob && (
          <p className={styles.item}>
            <span className={styles.item__name}>Looking for a job description: </span>
            {userProfile?.lookingForAJobDescription}
          </p>
        )}
      </div>
      <div className={styles.profile__info__right}>
        <h2>Contacts: </h2>
        {userProfile &&
          Object.keys(userProfile.contacts).map((key) => {
            const contactValue = userProfile.contacts[key as keyof typeof userProfile.contacts]
            return (
              contactValue !== null &&
              contactValue !== "" && (
                <p className={styles.item} key={key}>
                  <span className={styles.item__name}>{key}: </span>
                  <a
                    className={styles.item__link}
                    href={`https://${contactValue}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contactValue}
                  </a>
                </p>
              )
            )
          })}
      </div>
    </div>
  )
}
