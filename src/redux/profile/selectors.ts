import { AppStateType } from "redux/store"

export const selectCurrentUserProfile = (state: AppStateType) => state.profilePage.profile
export const selectPosts = (state: AppStateType) => state.profilePage.postsData
