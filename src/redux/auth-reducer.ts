import {AppThunk} from "./store";
import {authAPI} from "../api/api";

type setUserDataTypeAC = ReturnType<typeof setUserData>
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
        email: "email@gmail.com",
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

export const setUserData = (data: AuthDataType) => ({type: "SET_USER_DATA", data} as const)
export const setAuth = (isAuth: boolean) => ({type: "SET_AUTH", isAuth} as const)

export const getAuthUserData = (): AppThunk => async dispatch => {
    let {data} = await authAPI.me()
    if (data.resultCode === 0) {
        dispatch(setUserData(data))
        dispatch(setAuth(true))
    }
}

export default authReducer;
