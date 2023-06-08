import React, { useContext, useEffect } from "react"
import styles from "./friends.module.css"
import { useDispatch, useSelector } from "react-redux"
import {
  fetchFriends,
  selectCurrentPage,
  selectFollowingInProgress,
  selectFriends,
  selectIsFetching,
  selectPageSize,
  selectTotalUserCount,
  setCurrentPage,
  setFriends,
  setTotalUserCount,
  toggleIsFetching,
} from "redux/users"
import { Pagination } from "@mui/material"
import { Search } from "components/Search/Search"
import Preloader from "components/common/Preloader"
import { User } from "components/Users/User/User"
import { usersAPI } from "api/api"
import { SearchContext } from "App"

export const Friends = () => {
  const dispatch = useDispatch()
  const friends = useSelector(selectFriends)
  const isFetching = useSelector(selectIsFetching)
  const currentPage = useSelector(selectCurrentPage)
  const totalUserCount = useSelector(selectTotalUserCount)
  const pageSize = useSelector(selectPageSize)
  const followingInProgress = useSelector(selectFollowingInProgress)
  const { searchInput } = useContext(SearchContext)

  let pageCount = Math.ceil(totalUserCount / pageSize)
  let page = []
  for (let i = 1; i <= pageCount; i++) {
    page.push(i)
  }
  const onClickPageChanged = (currPage: number) => {
    dispatch(fetchFriends(currPage, pageSize, searchInput))
  }

  useEffect(() => {
    dispatch(toggleIsFetching(true))
    usersAPI.getFriends(currentPage, pageSize, searchInput).then((data) => {
      dispatch(toggleIsFetching(false))
      dispatch(setFriends(data.items))
      dispatch(setTotalUserCount(data.totalCount))
    })

    return () => {
      dispatch(setCurrentPage(1))
    }
  }, [searchInput])

  return (
    <section className={`${styles.friends__section} content`}>
      <Search />

      {isFetching ? (
        <Preloader />
      ) : (
        <div className={styles.users}>
          {friends.map((friend) => (
            <User {...friend} key={friend.id} followingInProgress={followingInProgress} />
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
