import { AppStateType } from "redux/store"

export const selectInitialized = (state: AppStateType) => state.app.initialized
export const selectGlobalError = (state: AppStateType) => state.app.error
