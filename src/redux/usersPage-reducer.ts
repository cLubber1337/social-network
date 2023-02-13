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
export type SetTotalUserCountTypeAC = {
    type: "SET_TOTAL_USER_COUNT"
    totalUsers: number
}
export type SetUsersTypeAC = {
    type: "SET_USERS"
    users: UsersType[]
}
export type isFetchingTypeAC = {
    type: "TOGGLE_IS_FETCHING"
    isFetching: boolean
}

type ActionType = SetCurrentPageTypeAC | FollowTypeAC | UnfollowTypeAC | SetUsersTypeAC | SetTotalUserCountTypeAC
    | isFetchingTypeAC

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
    pageSize: 4,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false
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
        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }

}

export const follow = (userId: number) => ({type: "FOLLOW", userId})
export const unFollow = (userId: number) => ({type: "UNFOLLOW", userId})
export const setUsers = (users: UsersType) => ({type: "SET_USERS", users})
export const setCurrentPage = (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage})
export const setTotalUserCount = (totalUsers: number) => ({type: "SET_TOTAL_USER_COUNT", totalUsers})
export const toggleIsFetching = (isFetching: boolean) => ({type: "TOGGLE_IS_FETCHING", isFetching})


export default usersReducer