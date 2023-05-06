import {AppStateType} from "redux/store";
import {createSelector} from "reselect";
import {UsersType} from "redux/usersPage-reducer";

export const getUserSelector = (state: AppStateType) => {
    return state.usersPage.items
}

export const getUsers = createSelector(getUserSelector, (users: UsersType[]) => {
    return users.filter(u => u )
})
export const  getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const  getTotalUserCount = (state: AppStateType) => {
    return state.usersPage.totalUserCount
}
export const  getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const  getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const  getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}

