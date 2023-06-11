import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  fetchFriends,
  selectFriends,
  selectPageSize,
  selectTotalFriendsCount,
  setFriends,
  setTotalFriendsCount,
  toggleIsFetching,
} from "redux/users"
import { usersAPI } from "api/api"
import { Users } from "components/Users/Users"
import { selectIsAuth } from "redux/auth"
import { Redirect } from "react-router-dom"

export const FriendsPage = () => {
  const dispatch = useDispatch()
  const friends = useSelector(selectFriends)
  const totalFriendsCount = useSelector(selectTotalFriendsCount)
  const pageSize = useSelector(selectPageSize)
  const isAuth = useSelector(selectIsAuth)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchInput, setSearchInput] = useState("")

  const onClickPageChanged = (currPage: number) => {
    dispatch(fetchFriends(currPage, pageSize, searchInput))
    setCurrentPage(currPage)
    setSearchInput("")
  }

  useEffect(() => {
    dispatch(toggleIsFetching(true))
    usersAPI.getFriends(currentPage, pageSize, searchInput).then((data) => {
      dispatch(toggleIsFetching(false))
      dispatch(setFriends(data.items))
      dispatch(setTotalFriendsCount(data.totalCount))
    })
    return () => {
      setCurrentPage(1)
    }
  }, [searchInput])

  if (!isAuth) return <Redirect to={"/login"} />
  return (
    <Users
      currentPage={currentPage}
      users={friends}
      totalUsersCount={totalFriendsCount}
      onClickPageChanged={onClickPageChanged}
      setSearchInput={setSearchInput}
    />
  )
}
