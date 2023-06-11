import { profileAPI, usersAPI } from "api/api"
import { AppThunk } from "redux/store"
import {
  PostsType,
  PostType,
  ProfileActionTypes,
  ProfileType,
  ProfileTypeForUpdate,
} from "redux/profile/types"
import { v1 } from "uuid"

export type InitialStateType = typeof initialState

let initialState = {
  postsData: [
    {
      id: v1(),
      text: "I am glad to see you on my page!",
      like: 2,
    },
    {
      id: v1(),
      text: "I love juicy pineapple.",
      like: 15,
    },
  ] as PostType[],
  profile: null as null | ProfileType,
  userStatus: "",
  updateProfile: {} as ProfileTypeForUpdate,
}

const profilePageReducer = (
  state: InitialStateType = initialState,
  action: ProfileActionTypes
): InitialStateType => {
  switch (action.type) {
    case "ADD-POST":
      let newPost: PostsType = {
        id: v1(),
        text: action.post,
        like: 0,
      }
      return { ...state, postsData: [newPost, ...state.postsData] }
    case "SET-USER-PROFILE":
      if (action.profile === null) {
        return state
      } else {
        return { ...state, profile: action.profile }
      }
    case "SET-UPDATE-PROFILE": {
      return { ...state, updateProfile: action.updateProfile }
    }
    case "SET-STATUS": {
      return { ...state, userStatus: action.userStatus }
    }
    case "UPDATE-STATUS":
      return { ...state, userStatus: action.status }
    case "DELETE-POST":
      return { ...state, postsData: state.postsData.filter((p) => p.id !== action.id.toString()) }
    default:
      return state
  }
}
// actions
export const addPost = (post: string) => ({ type: "ADD-POST", post } as const)
export const deletePost = (id: number) => ({ type: "DELETE-POST", id } as const)
export const setStatus = (userStatus: string) => ({ type: "SET-STATUS", userStatus } as const)
export const setUpdateStatus = (status: string) => ({ type: "UPDATE-STATUS", status } as const)
export const setUserProfile = (profile: ProfileType | null) =>
  ({ type: "SET-USER-PROFILE", profile } as const)
export const setUpdateProfile = (updateProfile: ProfileTypeForUpdate) =>
  ({ type: "SET-UPDATE-PROFILE", updateProfile } as const)

//thunks
export const getUserProfile =
  (userID: string): AppThunk =>
  async (dispatch) => {
    let { data } = await usersAPI.getProfile(userID)
    dispatch(setUserProfile(data))
  }
export const updateStatus =
  (status: string): AppThunk =>
  async (dispatch) => {
    let { data } = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
      dispatch(setUpdateStatus(status))
    }
  }
export const getStatus =
  (userID: string): AppThunk =>
  async (dispatch) => {
    let { data } = await profileAPI.getStatus(userID)
    dispatch(setStatus(data))
  }

export default profilePageReducer
