import { AppThunk } from "redux/store"
import { getAuthUserData } from "redux/auth/reducer"
import { AppActionType } from "redux/app/types"

type InitialStateType = typeof initialState
type GlobalErrorType = {
  name: string
  message: string
  stack: string
}

let initialState = {
  initialized: false,
  error: null as null | GlobalErrorType,
}

const appReducer = (
  state: InitialStateType = initialState,
  action: AppActionType
): InitialStateType => {
  switch (action.type) {
    case "SET_INITIALIZED_SUCCESS": {
      return { ...state, initialized: true }
    }
    case "ERROR_SUCCESS":
      return { ...state, error: action.error }
    default:
      return state
  }
}
// thunks
export const initialize = (): AppThunk => async (dispatch) => {
  try {
    let promise = dispatch(getAuthUserData())
    await promise
    dispatch(initializedSuccess())
  } catch (error) {
    console.log(error)
  }
}
// actions
export const initializedSuccess = () => ({ type: "SET_INITIALIZED_SUCCESS" } as const)
export const errorAction = (error: GlobalErrorType | null) =>
  ({ type: "ERROR_SUCCESS", error } as const)

export default appReducer
