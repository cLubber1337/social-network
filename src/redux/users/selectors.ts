import { AppStateType } from "redux/store"
import { createSelector } from "reselect"
import { UsersType } from "redux/users/types"

export const getUserSelector = (state: AppStateType) => {
  return state.usersPage.items
}
export const getUsers = createSelector(getUserSelector, (users: UsersType[]) => {
  return users.filter((u) => u)
})
export const selectPageSize = (state: AppStateType) => {
  return state.usersPage.pageSize
}
export const selectTotalUserCount = (state: AppStateType) => {
  return state.usersPage.totalUserCount
}
export const selectCurrentPage = (state: AppStateType) => {
  return state.usersPage.currentPage
}
export const selectIsFetching = (state: AppStateType) => state.usersPage.isFetching

export const selectFollowingInProgress = (state: AppStateType) => {
  return state.usersPage.followingInProgress
}
