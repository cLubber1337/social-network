import { AppThunk } from "redux/store"
import { authAPI } from "api/api"
import { stopSubmit } from "redux-form"
import { AuthActionType, AuthDataType, AuthStateType } from "redux/auth/types"

type InitialStateType = typeof initialState

let initialState: AuthStateType = {
  data: {
    id: null,
    email: null,
    login: null,
  },
  isAuth: false,
}

const authReducer = (
  state: InitialStateType = initialState,
  action: AuthActionType
): InitialStateType => {
  switch (action.type) {
    case "SET_USER_DATA":
      return { ...state, ...action.data }
    case "SET_AUTH":
      return { ...state, isAuth: action.isAuth }
    default:
      return state
  }
}

export const setAuthUserData = (data: AuthDataType) => ({ type: "SET_USER_DATA", data } as const)
export const setAuth = (isAuth: boolean) => ({ type: "SET_AUTH", isAuth } as const)

export const getAuthUserData = (): AppThunk => async (dispatch) => {
  try {
    let { data } = await authAPI.me()
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(data))
      dispatch(setAuth(true))
    } else {
      console.log(data.messages.join("\n"))
    }
  } catch (error) {
    console.log(error)
  }
}

export const login =
  (login: string, password: string, rememberMe: boolean): AppThunk =>
  async (dispatch) => {
    let { data } = await authAPI.loggIn(login, password, rememberMe)
    if (data.resultCode === 0) {
      dispatch(getAuthUserData())
    } else {
      let message = data.messages.length > 0 ? data.messages[0] : "some error"
      dispatch(stopSubmit("login", { _error: message }))
    }
  }
export const logout = (): AppThunk => async (dispatch) => {
  let { data } = await authAPI.loggOut()
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(data))
    dispatch(setAuth(false))
  }
}

export default authReducer
