import {
  addPost,
  deletePost,
  setStatus,
  setUpdateProfile,
  setUpdateStatus,
  setUserProfile,
} from "redux/profile/reducer"

type setCurrentStatusACType = ReturnType<typeof setStatus>
type setUpdateStatusACType = ReturnType<typeof setUpdateStatus>
export type AddPostActionType = ReturnType<typeof addPost>
export type deletePostActionType = ReturnType<typeof deletePost>
type SetUserProfileType = ReturnType<typeof setUserProfile>
type SetUpdateProfileType = ReturnType<typeof setUpdateProfile>

export type ProfileActionTypes =
  | AddPostActionType
  | SetUserProfileType
  | setCurrentStatusACType
  | setUpdateStatusACType
  | deletePostActionType
  | SetUpdateProfileType

export type PostsType = {
  id: string
  text: string
  like: number
}
export type PostType = {
  id: string
  text: string
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
export type ProfileTypeForUpdate = {
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
  userId: number | null
}
