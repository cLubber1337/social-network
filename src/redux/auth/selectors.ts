import { AppStateType } from "redux/store"

export const selectIsAuth = (state: AppStateType) => state.authorization.isAuth
export const selectAuthData = (state: AppStateType) => state.authorization.data
