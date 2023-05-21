import { profileAPI, usersAPI } from "api/api"
import { AppStateType, AppThunk } from "./store"

type setCurrentStatusACType = ReturnType<typeof setStatus>
type setUpdateStatusACType = ReturnType<typeof setUpdateStatus>
export type AddPostActionType = ReturnType<typeof addPost>
export type deletePostActionType = ReturnType<typeof deletePost>
type SetUserProfileType = ReturnType<typeof setUserProfile>
type ActionTypes =
  | AddPostActionType
  | SetUserProfileType
  | setCurrentStatusACType
  | setUpdateStatusACType
  | deletePostActionType

export type PostsType = {
  id: number
  text: string
  photo: string
  like: number
}
export type PostType = {
  id: number
  text: string
  photo: string
  like: number
}
export type ProfileType = {
  aboutMe: string
  contacts: {
    facebook: null | string
    website: null | string
    vk: null | string
    twitter: null | string
    instagram: null | string
    youtube: null | string
    github: null | string
    mainLink: null | string
  }
  lookingForAJob: boolean
  lookingForAJobDescription: null | string
  fullName: string
  userId: number
  photos: {
    small: string | undefined
    large: string | undefined
  }
}
export type InitialStateType = typeof initialState

let initialState = {
  postsData: [
    {
      id: 1,
      text: "Haven't heard from you for a long time",
      photo:
        "https://img.freepik.com/premium-vector/man-dashiki-fashion-model_726184-234.jpg?w=826",
      like: 2,
    },
    {
      id: 2,
      text: "I love you!",
      photo:
        "https://img.freepik.com/free-vector/korean-drawing-style-character-design_52683-92286.jpg?w=826&t=st=1671760295~exp=1671760895~hmac=a9c8ddfc28e01fc5e416f6f10e1e3db6b696cbf23900fd1c9fb313b6a4612ac8",
      like: 15,
    },
    {
      id: 3,
      text: "Yo, what's up, bro?",
      photo:
        "https://img.freepik.com/premium-vector/cartoon-style-illustration-man-smile-confidently-with-crossed-hand-chest_7443-231.jpg?w=826",
      like: 10,
    },
  ] as PostType[],
  profile: null as null | ProfileType,
  userStatus: "",
}

const profilePageReducer = (
  state: InitialStateType = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case "ADD-POST":
      let newPost: PostsType = {
        id: 4,
        text: action.post,
        photo:
          "https://img.freepik.com/free-vector/korean-drawing-style-character-design_52683-92286.jpg?w=826&t=st=1671760295~exp=1671760895~hmac=a9c8ddfc28e01fc5e416f6f10e1e3db6b696cbf23900fd1c9fb313b6a4612ac8",
        like: 777,
      }
      return { ...state, postsData: [newPost, ...state.postsData] }
    case "SET-USER-PROFILE":
      if (action.profile === null) {
        return state
      } else {
        return { ...state, profile: action.profile }
      }
    case "SET-STATUS": {
      return { ...state, userStatus: action.userStatus }
    }
    case "UPDATE-STATUS":
      return { ...state, userStatus: action.status }
    case "DELETE-POST":
      return { ...state, postsData: state.postsData.filter((p) => p.id !== action.id) }
    default:
      return state
  }
}

export const addPost = (post: string) => ({ type: "ADD-POST", post } as const)
export const deletePost = (id: number) => ({ type: "DELETE-POST", id } as const)
export const setStatus = (userStatus: string) => ({ type: "SET-STATUS", userStatus } as const)
export const setUpdateStatus = (status: string) => ({ type: "UPDATE-STATUS", status } as const)
export const setUserProfile = (profile: ProfileType | null) =>
  ({ type: "SET-USER-PROFILE", profile } as const)
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

export const getCurrentUserProfile = (state: AppStateType) => state.profilePage.profile
export const getPosts = (state: AppStateType) => state.profilePage.postsData

export default profilePageReducer
