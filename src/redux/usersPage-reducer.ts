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
    id: number, followed: boolean, fullName: string, status: string, location: { city: string, country: string }
}

type InitialStateType = typeof initialState

let initialState = {
    users: [
        {id: 1, followed: true, fullName: "Bob", status: "I like fish", location: {city: "New York", country: "USA"}},
        {
            id: 2,
            followed: false,
            fullName: "Jack",
            status: "I am a student",
            location: {city: "Lost Angels", country: "USA"}
        },
        {id: 3, followed: true, fullName: "Akira  ", status: "アキラ", location: {city: "Tokyo", country: "Japan"}},
        {id: 4, followed: false, fullName: "Asa", status: "青木", location: {city: "Osaka", country: "Japan"}},
    ] as UsersType[]
}

const usersReducer = (state: InitialStateType = initialState, action: FollowTypeAC | UnfollowTypeAC | SetUsersAC): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case "UNFOLLOW":
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case "SET_USERS":
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const followAC = (userId: number) => ({type: "FOLLOW", userId})
export const unfollowAC = (userId: number) => ({type: "UNFOLLOW", userId})
export const setUsersAC = (users: UsersType) => ({type: "SET_USERS", users})


export default usersReducer