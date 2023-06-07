import { Action, applyMiddleware, combineReducers, compose, createStore } from "redux"
import profileReducer from "redux/profile/reducer"
import dialogReducer from "redux/dialogs/reducer"
import usersReducer from "redux/users/reducer"
import authReducer from "redux/auth/reducer"
import thunkMiddleware, { ThunkAction } from "redux-thunk"
import { reducer as formReducer } from "redux-form"
import appReducer from "redux/app/reducer"

interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
}
declare const window: Window

export const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  usersPage: usersReducer,
  authorization: authReducer,
  form: formReducer,
  app: appReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export type AppStateType = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppStateType,
  unknown,
  Action<string>
>
export default store
