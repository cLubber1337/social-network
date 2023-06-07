import React from "react"
import styles from "components/Users/User/user.module.css"
import { NavLink } from "react-router-dom"
import { Avatar, Button } from "@mui/material"
import { followThunk, unFollowThunk, UsersType } from "redux/users"
import { useDispatch } from "react-redux"

type Props = {
  name: string
  id: number
  uniqueUrlName: string | null
  photos: { small: string; large: string | null }
  status: string | null
  followed: boolean
  followingInProgress: number[]
}

export const User = ({ name, id, photos, status, followed, followingInProgress }: Props) => {
  const dispatch = useDispatch()
  const onUnFollowClick = (userID: number) => {
    dispatch(unFollowThunk(userID))
  }
  const onFollowClick = (userID: number) => {
    dispatch(followThunk(userID))
  }

  return (
    <div className={styles.user}>
      <div className={styles.photo__button}>
        <NavLink to={`/profile/${id}`}>
          <Avatar
            className={styles.photo}
            sx={{ width: 56, height: 56 }}
            src={
              photos.small === null
                ? "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                : photos.small
            }
            alt="user"
          />
        </NavLink>

        {followed ? (
          <Button
            color={"primary"}
            className={styles.button}
            variant={"outlined"}
            onClick={() => onUnFollowClick(id)}
            disabled={followingInProgress.some((userId) => userId === id)}
          >
            Unfollow
          </Button>
        ) : (
          <Button
            color={"primary"}
            variant={"contained"}
            className={styles.button}
            onClick={() => onFollowClick(id)}
            disabled={followingInProgress.some((userId) => userId === id)}
          >
            Follow
          </Button>
        )}
      </div>

      <div className={styles.info}>
        <p className={styles.name}>
          <strong>{name}</strong>
        </p>

        <p className={styles.status}> Status: {status}</p>
        {followed ? (
          <p className={styles.friends__true}>Friends</p>
        ) : (
          <p className={styles.friends__false}> Not friends</p>
        )}
      </div>
    </div>
  )
}
