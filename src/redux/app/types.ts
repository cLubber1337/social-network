import { errorAction, initializedSuccess } from "redux/app/reducer"

export type setInitializedTypeAC = ReturnType<typeof initializedSuccess>
export type ErrorActionTypeAC = ReturnType<typeof errorAction>

export type AppActionType = setInitializedTypeAC | ErrorActionTypeAC
