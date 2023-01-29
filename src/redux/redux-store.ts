import {combineReducers, createStore} from "redux";
import profileReducer from "./profilePage-reducer"
import dialogReducer from "./dialogsPage-reducer"


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer
})


export const store = createStore(rootReducer)
export  type AppStateType = ReturnType<typeof rootReducer>






