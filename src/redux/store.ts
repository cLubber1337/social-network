import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profilePage-reducer"
import dialogReducer from "./dialogsPage-reducer"
import usersReducer from "./usersPage-reducer"
import authReducer from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
    authorization: authReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type AppStateType = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, Action<string>>






