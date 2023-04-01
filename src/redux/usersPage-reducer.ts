export type FollowTypeAC = ReturnType<typeof follow>
export type UnfollowTypeAC = ReturnType<typeof unFollow>
export type SetCurrentPageTypeAC = ReturnType<typeof setCurrentPage>
export type SetTotalUserCountTypeAC = ReturnType<typeof setTotalUserCount>
export type SetUsersTypeAC = ReturnType<typeof setUsers>
export type isFetchingTypeAC = ReturnType<typeof toggleIsFetching>
export type followingInProgressTypeAC = ReturnType<typeof toggleFollowingInProgress>


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
    followingInProgress: [2],
    photoLarge: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
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

export const follow = (userId: number) => ({type: "FOLLOW", userId} as const)
export const unFollow = (userId: number) => ({type: "UNFOLLOW", userId} as const )
export const setUsers = (users: UsersType[]) => ({type: "SET_USERS", users} as const)
export const setCurrentPage = (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage} as const)
export const setTotalUserCount = (totalUsers: number) => ({type: "SET_TOTAL_USER_COUNT", totalUsers} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: "TOGGLE_IS_FETCHING", isFetching} as const)
export const toggleFollowingInProgress = (isFetching: boolean, userID: number) => ({
    type: "TOGGLE_FOLLOWING_IN_PROGRESS",
    isFetching, userID
} as const)


export default usersReducer