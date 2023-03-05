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
export type followingInProgressTypeAC = {
    type: "TOGGLE_FOLLOWING_IN_PROGRESS"
    isFetching: boolean
    userID: number
}


type ActionType = SetCurrentPageTypeAC | FollowTypeAC | UnfollowTypeAC | SetUsersTypeAC | SetTotalUserCountTypeAC
    | isFetchingTypeAC | followingInProgressTypeAC

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
    pageSize: 8,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [2]
}


const usersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, items: state.items.map(u => u.id === action.userId ? {...u, followed: true} : u)}
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
        case "TOGGLE_FOLLOWING_IN_PROGRESS":
            return {...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id=> id !== action.userID)
            }
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
export const toggleFollowingInProgress = (isFetching: boolean, userID: number) => ({
    type: "TOGGLE_FOLLOWING_IN_PROGRESS",
    isFetching, userID
})


export default usersReducer