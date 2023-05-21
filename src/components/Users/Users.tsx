import React from "react"
import style from "./Users.module.css"
import { unFollowThunk, requestUsers, followThunk } from "redux/users/reducer"
import { NavLink } from "react-router-dom"
import { Pagination, Button, Avatar } from "@mui/material"
import { useDispatch } from "react-redux"
import { UsersType } from "redux/users"

type UsersPropsType = {
  users: UsersType[]
  pageSize: number
  totalUserCount: number
  currentPage: number
  followingInProgress: number[]
}

const Users = ({
  users,
  currentPage,
  totalUserCount,
  pageSize,
  followingInProgress,
}: UsersPropsType) => {
  const dispatch = useDispatch()
  let pageCount = Math.ceil(totalUserCount / pageSize)
  let page = []
  for (let i = 1; i <= pageCount; i++) {
    page.push(i)
  }

  const onUnFollowClick = (userID: number) => {
    dispatch(unFollowThunk(userID))
  }

  const onFollowClick = (userID: number) => {
    dispatch(followThunk(userID))
  }

  const onClickPageChanged = (currPage: number) => {
    dispatch(requestUsers(currPage, pageSize))
  }

  return (
    <div className={style.content}>
      {users.map((user) => (
        <div className={style.subscriber} key={user.id}>
          <div className={style.photoStatus}>
            <NavLink to={`/profile/${user.id}`}>
              <Avatar
                sx={{ width: 56, height: 56 }}
                src={
                  user.photos.small === null
                    ? "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    : user.photos.small
                }
                alt="user"
              />
            </NavLink>

            {user.followed ? (
              <Button
                color={"primary"}
                className={style.button}
                variant={"outlined"}
                onClick={() => onUnFollowClick(user.id)}
                disabled={followingInProgress.some((id) => id === user.id)}
              >
                Unfollow
              </Button>
            ) : (
              <Button
                color={"primary"}
                variant={"contained"}
                className={style.button}
                onClick={() => onFollowClick(user.id)}
                disabled={followingInProgress.some((id) => id === user.id)}
              >
                Follow
              </Button>
            )}
          </div>
          <div className={style.description}>
            <div className={style.nameStatus}>
              <span>
                <strong>{user.name}</strong>
              </span>
              <span>status: {user.status}</span>
            </div>
            <div className={style.location}>
              <span>Country: {"location.country"}</span>
              <span>City: {"location.city"}</span>
            </div>
          </div>
        </div>
      ))}
      <div className={style.pagination}>
        <div className={style.pagination}>
          <Pagination
            count={pageCount}
            color="primary"
            page={currentPage}
            onChange={(_, num) => onClickPageChanged(num)}
          />
        </div>
      </div>
    </div>
  )
}

export default Users
