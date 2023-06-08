import React from "react"
import styles from "components/Users/users-page.module.css"
import { requestUsers } from "redux/users/reducer"
import { Pagination } from "@mui/material"
import { useDispatch } from "react-redux"
import { UsersType } from "redux/users"
import { User } from "components/Users/User/User"
import { Search } from "components/Search/Search"
import Preloader from "components/common/Preloader"

type UsersPropsType = {
  users: UsersType[]
  pageSize: number
  totalUserCount: number
  currentPage: number
  followingInProgress: number[]
  isFetching: boolean
}

const UsersPage = ({
  users,
  currentPage,
  totalUserCount,
  pageSize,
  followingInProgress,
  isFetching,
}: UsersPropsType) => {
  const dispatch = useDispatch()

  let pageCount = Math.ceil(totalUserCount / pageSize)
  let page = []
  for (let i = 1; i <= pageCount; i++) {
    page.push(i)
  }

  const onClickPageChanged = (currPage: number) => {
    dispatch(requestUsers(currPage, pageSize))
  }

  return (
    <section className={`${styles.users__section} content`}>
      <Search />

      {isFetching ? (
        <Preloader />
      ) : (
        <div className={styles.users}>
          {users.map((user) => (
            <User {...user} key={user.id} followingInProgress={followingInProgress} />
          ))}
        </div>
      )}

      <div className={styles.pagination}>
        <Pagination
          count={pageCount}
          color="primary"
          page={currentPage}
          onChange={(_, num) => onClickPageChanged(num)}
        />
      </div>
    </section>
  )
}

export default UsersPage
