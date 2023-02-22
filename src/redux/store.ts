import {combineReducers, createStore} from "redux";
import profileReducer from "./profilePage-reducer"
import dialogReducer from "./dialogsPage-reducer"
import usersReducer from "./usersPage-reducer"
import authReducer from "./auth-reducer";


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
    authorization: authReducer
})


export const store = createStore(rootReducer)
export  type AppStateType = ReturnType<typeof rootReducer>






