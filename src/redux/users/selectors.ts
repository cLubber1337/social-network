import { AppStateType } from "redux/store"

export const selectUsers = (state: AppStateType) => {
  return state.usersPage.items
}

export const selectPageSize = (state: AppStateType) => {
  return state.usersPage.pageSize
}
export const selectTotalUserCount = (state: AppStateType) => state.usersPage.totalUsersCount
export const selectTotalFriendsCount = (state: AppStateType) => state.usersPage.totalFriendsCount

export const selectCurrentPage = (state: AppStateType) => {
  return state.usersPage.currentPage
}
export const selectIsFetching = (state: AppStateType) => state.usersPage.isFetching

export const selectFollowingInProgress = (state: AppStateType) => {
  return state.usersPage.followingInProgress
}
export const selectFriends = (state: AppStateType) => state.usersPage.friends
