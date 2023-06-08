import { usersAPI } from "api/api"
import { AppThunk } from "redux/store"
import { UsersActionType, UsersType } from "redux/users/types"

type InitialStateType = typeof initialState

let initialState = {
  items: [] as UsersType[],
  friends: [] as UsersType[],
  pageSize: 8,
  totalUsersCount: 0,
  totalFriendsCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [1] as number[],
  photoLarge: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
}

const usersReducer = (
  state: InitialStateType = initialState,
  action: UsersActionType
): InitialStateType => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        items: state.items.map((u) => (u.id === action.userId ? { ...u, followed: true } : u)),
      }
    case "UNFOLLOW":
      return {
        ...state,
        items: state.items.map((u) => (u.id === action.userId ? { ...u, followed: false } : u)),
        friends: state.friends.filter((u) => u.id !== action.userId),
      }
    case "SET_USERS":
      return { ...state, items: [...action.items] }
    case "SET_FRIENDS":
      return { ...state, friends: [...action.friends] }
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.currentPage }
    case "SET_TOTAL_USER_COUNT":
      return { ...state, totalUsersCount: action.totalUsers }
    case "SET_TOTAL_FRIENDS_COUNT":
      return { ...state, totalFriendsCount: action.totalFriends }
    case "TOGGLE_IS_FETCHING":
      return { ...state, isFetching: action.isFetching }
    case "TOGGLE_FOLLOWING_IN_PROGRESS":
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userID]
          : state.followingInProgress.filter((id) => id !== action.userID),
      }
    default:
      return state
  }
}

export const follow = (userId: number) => ({ type: "FOLLOW", userId } as const)
export const unFollow = (userId: number) => ({ type: "UNFOLLOW", userId } as const)
export const setUsers = (items: UsersType[]) => ({ type: "SET_USERS", items } as const)
export const setFriends = (friends: UsersType[]) => ({ type: "SET_FRIENDS", friends } as const)

export const setCurrentPage = (currentPage: number) =>
  ({ type: "SET_CURRENT_PAGE", currentPage } as const)
export const setTotalUserCount = (totalUsers: number) =>
  ({ type: "SET_TOTAL_USER_COUNT", totalUsers } as const)
export const setTotalFriendsCount = (totalFriends: number) =>
  ({ type: "SET_TOTAL_FRIENDS_COUNT", totalFriends } as const)
export const toggleIsFetching = (isFetching: boolean) =>
  ({ type: "TOGGLE_IS_FETCHING", isFetching } as const)

export const toggleFollowingInProgress = (isFetching: boolean, userID: number) =>
  ({
    type: "TOGGLE_FOLLOWING_IN_PROGRESS",
    isFetching,
    userID,
  } as const)

export const fetchUsers =
  (currentPage: number, pageSize: number, searchValue: string): AppThunk =>
  async (dispatch) => {
    dispatch(setCurrentPage(currentPage))
    dispatch(toggleIsFetching(true))
    let data = await usersAPI.getUsers(currentPage, pageSize, searchValue)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
  }
export const fetchFriends =
  (currentPage: number, pageSize: number, searchValue: string): AppThunk =>
  async (dispatch) => {
    dispatch(setCurrentPage(currentPage))
    dispatch(toggleIsFetching(true))
    let data = await usersAPI.getFriends(currentPage, pageSize, searchValue)
    dispatch(toggleIsFetching(false))
    dispatch(setFriends(data.items))
  }

export const unFollowThunk =
  (userId: number): AppThunk =>
  async (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId))
    let { data } = await usersAPI.unFollow(userId)
    if (data.resultCode === 0) {
      dispatch(unFollow(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId))
  }

export const followThunk =
  (userId: number): AppThunk =>
  async (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId))
    let { data } = await usersAPI.follow(userId)
    if (data.resultCode === 0) {
      dispatch(follow(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId))
  }

export default usersReducer
