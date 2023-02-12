export type FollowTypeAC = {
    type: "FOLLOW"
    userId: number
}
export type UnfollowTypeAC = {
    type: "UNFOLLOW"
    userId: number
}
export type SetCurrentPageTypeAC = {
    type: "SET_CURRENT_PAGE"
    currentPage: number
}
export type SetTotalUserCountAC = {
    type: "SET_TOTAL_USER_COUNT"
    totalUsers: number
}
export type SetUsersAC = {
    type: "SET_USERS"
    users: UsersType[]
}

type ActionType = SetCurrentPageTypeAC | FollowTypeAC | UnfollowTypeAC | SetUsersAC | SetTotalUserCountAC

export type UsersType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: {
        small: string
        large: string | null
    }
    status: string | null
    followed: boolean
}

type InitialStateType = typeof initialState

let initialState = {
    items: [] as UsersType[],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1
}


const usersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return <InitialStateType>{
                ...state,
                items: state.items.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case "UNFOLLOW":
            return {...state, items: state.items.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case "SET_USERS":
            return {...state, items: [...action.users]}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET_TOTAL_USER_COUNT":
            return {...state, totalUserCount: action.totalUsers}
        default:
            return state
    }

}

export const followAC = (userId: number) => ({type: "FOLLOW", userId})
export const unfollowAC = (userId: number) => ({type: "UNFOLLOW", userId})
export const setUsersAC = (users: UsersType) => ({type: "SET_USERS", users})
export const SetCurrentPageAC = (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage})
export const SetTotalUserCountAC = (totalUsers: number) => ({type: "SET_TOTAL_USER_COUNT", totalUsers})


export default usersReducer