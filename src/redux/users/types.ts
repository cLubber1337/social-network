import {
  follow,
  setCurrentPage,
  setFriends,
  setTotalUserCount,
  setUsers,
  toggleFollowingInProgress,
  toggleIsFetching,
  unFollow,
} from "redux/users/reducer"

export type FollowTypeAC = ReturnType<typeof follow>
export type UnfollowTypeAC = ReturnType<typeof unFollow>
export type SetCurrentPageTypeAC = ReturnType<typeof setCurrentPage>
export type SetTotalUserCountTypeAC = ReturnType<typeof setTotalUserCount>
export type SetUsersTypeAC = ReturnType<typeof setUsers>
export type isFetchingTypeAC = ReturnType<typeof toggleIsFetching>
export type followingInProgressTypeAC = ReturnType<typeof toggleFollowingInProgress>
export type SetFriendsTypeAC = ReturnType<typeof setFriends>
export type UsersActionType =
  | SetCurrentPageTypeAC
  | FollowTypeAC
  | UnfollowTypeAC
  | SetUsersTypeAC
  | SetTotalUserCountTypeAC
  | isFetchingTypeAC
  | followingInProgressTypeAC
  | SetFriendsTypeAC

export type UsersType = {
  name: string
  id: number
  uniqueUrlName: string | null
  photos: {
    small: string
    large: string | null
  }
  status: string | null
  followed: boolean
}
