type setUserDataTypeAC = {
    type: "SET_USER_DATA";
    data: AuthDataType;
};
type setAuthTypeAC = {
    type: "SET_AUTH";
    isAuth: boolean;
};
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

const authReducer = (
    state: InitialStateType = initialState,
    action: ActionType
): InitialStateType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {...state, ...action.data};
        case "SET_AUTH":
            return {...state, isAuth: action.isAuth};
        default:
            return state;
    }
};

export const setUserData = (data: AuthDataType): setUserDataTypeAC => {
    return {type: "SET_USER_DATA", data};
};
export const setAuth = (isAuth: boolean): setAuthTypeAC => {
    return {type: "SET_AUTH", isAuth};
};

export default authReducer;
