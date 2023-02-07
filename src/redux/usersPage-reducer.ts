export type FollowTypeAC = {
    type: "FOLLOW"
    userId: number
}
export type UnfollowTypeAC = {
    type: "UNFOLLOW"
    userId: number
}
export type SetUsersAC = {
    type: "SET_USERS"
    users: UsersType[]
}


export type UsersType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null
    }
    status: string | null
    followed: boolean
}

type InitialStateType = typeof initialState

let initialState = {
    items: [] as UsersType[]
}

const usersReducer = (state: InitialStateType = initialState, action: FollowTypeAC | UnfollowTypeAC | SetUsersAC): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return <InitialStateType>{
                ...state,
                items: state.items.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case "UNFOLLOW":
            return {...state, items: state.items.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case "SET_USERS":
            return {...state, items: [...state.items, ...action.users]}
        default:
            return state
    }
}

export const followAC = (userId: number) => ({type: "FOLLOW", userId})
export const unfollowAC = (userId: number) => ({type: "UNFOLLOW", userId})
export const setUsersAC = (users: UsersType) => ({type: "SET_USERS", users})


export default usersReducer