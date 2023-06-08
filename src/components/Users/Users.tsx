import React from "react"
import styles from "./users.module.css"
import { Search } from "components/Search/Search"
import Preloader from "components/common/Preloader"
import { User } from "components/User/User"
import { Pagination } from "@mui/material"
import { selectIsFetching, selectPageSize, UsersType } from "redux/users"
import { useSelector } from "react-redux"

type Props = {
  users: UsersType[]
  totalUsersCount: number
  onClickPageChanged: (currPage: number) => void
  currentPage: number
  setSearchInput: (str: string) => void
}

export const Users = ({
  users,
  totalUsersCount,
  onClickPageChanged,
  currentPage,
  setSearchInput,
}: Props) => {
  const isFetching = useSelector(selectIsFetching)
  const pageSize = useSelector(selectPageSize)

  let pageCount = Math.ceil(totalUsersCount / pageSize)
  let page = []
  for (let i = 1; i <= pageCount; i++) {
    page.push(i)
  }

  return (
    <section className={`${styles.users__section} content`}>
      <Search setSearchInput={setSearchInput} />
      {isFetching ? (
        <Preloader />
      ) : (
        <div className={styles.users}>
          {users.map((user) => (
            <User {...user} key={user.id} />
          ))}
        </div>
      )}

      <div className="pagination">
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
