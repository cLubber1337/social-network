import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    SetCurrentPageAC,
    SetTotalUserCountAC,
    setUsersAC,
    unfollowAC,
    UsersType
} from "../../redux/usersPage-reducer";
import UsersAPIComponent from "./UsersAPIComponent";


type MapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUserCount: number
    currentPage:number

}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UsersType) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (totalUsers: number) => void

}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UsersType) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(SetCurrentPageAC(currentPage))
        },
        setTotalUserCount: (totalUsers: number) => {
            dispatch(SetTotalUserCountAC(totalUsers))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

