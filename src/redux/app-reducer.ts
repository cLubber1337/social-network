import {AppStateType, AppThunk} from "redux/store";
import {getAuthUserData} from "redux/auth-reducer";

type setInitializedTypeAC = ReturnType<typeof initializedSuccess>
type ActionType = setInitializedTypeAC
type InitialStateType = typeof initialState;


let initialState = {
    initialized: false
};

const appReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "SET_INITIALIZED_SUCCESS": {
            return {...state, initialized: true}
        }
        default:
            return state
    }
};

export const initialize = (): AppThunk => dispatch => {
    let promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(initializedSuccess())
    })

}


export const getInitialized = (state: AppStateType) => state.app.initialized
export const initializedSuccess = () => ({type: "SET_INITIALIZED_SUCCESS"} as const)


export default appReducer;
