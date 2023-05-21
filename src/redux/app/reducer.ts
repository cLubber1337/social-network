import { AppThunk } from "redux/store"
import { getAuthUserData } from "redux/auth/reducer"
import { AppActionType } from "redux/app/types"

type InitialStateType = typeof initialState

let initialState = {
  initialized: false,
}

const appReducer = (
  state: InitialStateType = initialState,
  action: AppActionType
): InitialStateType => {
  switch (action.type) {
    case "SET_INITIALIZED_SUCCESS": {
      return { ...state, initialized: true }
    }
    default:
      return state
  }
}
// thunks
export const initialize = (): AppThunk => async (dispatch) => {
  let promise = dispatch(getAuthUserData())
  await promise
  dispatch(initializedSuccess())
}
// actions
export const initializedSuccess = () => ({ type: "SET_INITIALIZED_SUCCESS" } as const)

export default appReducer
