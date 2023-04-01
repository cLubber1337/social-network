import {AppStateType, AppThunk} from "./store";
import {authAPI} from "api/api";
import {stopSubmit} from "redux-form";
import {Dispatch} from "redux";

type setUserDataTypeAC = ReturnType<typeof setAuthUserData>
type setAuthTypeAC = ReturnType<typeof setAuth>
type ActionType = setUserDataTypeAC | setAuthTypeAC;

export type AuthDataType = {
    id: number | null;
    email: string | null;
    login: string | null;
};
export type AuthStateType = {
    data: AuthDataType;
    isAuth: boolean;
};
type InitialStateType = typeof initialState;

let initialState: AuthStateType = {
    data: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: false,
};

const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {...state, ...action.data};
        case "SET_AUTH":
            return {...state, isAuth: action.isAuth};
        default:
            return state;
    }
};

export const setAuthUserData = (data: AuthDataType) => ({type: "SET_USER_DATA", data} as const)
export const setAuth = (isAuth: boolean) => ({type: "SET_AUTH", isAuth} as const)

export const getAuthUserData = () => (dispatch: Dispatch) => {
    return authAPI.me()
        .then(({data}) => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(data))
            dispatch(setAuth(true))
        }
    })
}

export const login = (login: string, password: string, rememberMe: boolean): AppThunk => async dispatch => {
    let {data} = await authAPI.loggIn(login, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(getAuthUserData())
        dispatch(setAuth(true))
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : "some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}
export const logout = (): AppThunk => async dispatch => {
    let {data} = await authAPI.loggOut()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(data))
        dispatch(setAuth(false))
    }
}

export const getIsAuth = (state: AppStateType) => state.authorization.isAuth
export const getAuthData = (state: AppStateType) => state.authorization.data


export default authReducer;
