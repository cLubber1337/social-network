import React, { useEffect, useState } from "react"
import { fetchUsers, setTotalUserCount, setUsers, toggleIsFetching } from "redux/users/reducer"
import { useDispatch, useSelector } from "react-redux"
import { selectPageSize, selectTotalUserCount, selectUsers } from "redux/users"
import { usersAPI } from "api/api"
import { Users } from "components/Users/Users"

const FindUsersPage = () => {
  const dispatch = useDispatch()
  const [searchInput, setSearchInput] = useState("")
  const users = useSelector(selectUsers)
  const pageSize = useSelector(selectPageSize)
  const totalUsersCount = useSelector(selectTotalUserCount)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize, searchInput).then((data) => {
      dispatch(toggleIsFetching(false))
      dispatch(setUsers(data.items))
      dispatch(setTotalUserCount(data.totalCount))
    })

    return () => {
      setCurrentPage(1)
    }
  }, [searchInput])

  const onClickPageChanged = (currPage: number) => {
    dispatch(fetchUsers(currPage, pageSize, searchInput))
    setCurrentPage(currPage)
  }

  return (
    <Users
      users={users}
      totalUsersCount={totalUsersCount}
      onClickPageChanged={onClickPageChanged}
      currentPage={currentPage}
      setSearchInput={setSearchInput}
    />
  )
}

export default FindUsersPage
