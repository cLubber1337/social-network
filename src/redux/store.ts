import { Action, applyMiddleware, combineReducers, createStore } from "redux"
import profileReducer from "redux/profile/reducer"
import dialogReducer from "redux/dialogs/reducer"
import usersReducer from "redux/users/reducer"
import authReducer from "redux/auth/reducer"
import thunkMiddleware, { ThunkAction } from "redux-thunk"
import { reducer as formReducer } from "redux-form"
import appReducer from "redux/app/reducer"

export const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  usersPage: usersReducer,
  authorization: authReducer,
  form: formReducer,
  app: appReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type AppStateType = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppStateType,
  unknown,
  Action<string>
>
