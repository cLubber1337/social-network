import { setAuth, setAuthUserData } from "redux/auth/reducer"

type setUserDataTypeAC = ReturnType<typeof setAuthUserData>
type setAuthTypeAC = ReturnType<typeof setAuth>
export type AuthActionType = setUserDataTypeAC | setAuthTypeAC

export type AuthDataType = {
  id: number | null
  email: string | null
  login: string | null
}
export type AuthStateType = {
  data: AuthDataType
  isAuth: boolean
}
