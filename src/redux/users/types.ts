import {
  follow,
  setCurrentPage,
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

export type UsersActionType =
  | SetCurrentPageTypeAC
  | FollowTypeAC
  | UnfollowTypeAC
  | SetUsersTypeAC
  | SetTotalUserCountTypeAC
  | isFetchingTypeAC
  | followingInProgressTypeAC

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
