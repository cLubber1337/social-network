import {combineReducers, createStore} from "redux";
import profileReducer from "./profilePage-reducer"
import dialogReducer from "./dialogsPage-reducer"
import usersReducer from "./usersPage-reducer"


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer
})


export const store = createStore(rootReducer)
export  type AppStateType = ReturnType<typeof rootReducer>






