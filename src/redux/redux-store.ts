import {combineReducers, createStore} from "redux";
import profileReducer from "./profilePage-reducer"
import dialogReducer from "./profilePage-reducer"


export let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer
})
export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)



