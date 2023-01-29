import {combineReducers, createStore} from "redux";
import profileReducer from "./profilePage-reducer"
import dialogReducer from "./profilePage-reducer"


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer
})

let store = createStore(
    reducers
)


export default store