import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {
    follow, toggleIsFetching,
    setCurrentPage,
    setTotalUserCount,
    setUsers,
    unFollow,
    UsersType
} from "../../redux/usersPage-reducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader";

type MapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean

}
type UsersPropsType = {
    users: UsersType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UsersType) => void
    setCurrentPage: (page: number) => void
    setTotalUserCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
}

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items);
                this.props.setTotalUserCount(res.data.totalCount)
            })
    }

    onClickPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return (<>
                {this.props.isFetching ?
                    <Preloader />
                    :
                    <Users users={this.props.users}
                           follow={this.props.follow}
                           unFollow={this.props.unFollow}
                           pageSize={this.props.pageSize}
                           totalUserCount={this.props.totalUserCount}
                           currentPage={this.props.currentPage}
                           onClickPageChanged={this.onClickPageChanged}/>
                }
            </>
        )

    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

export default connect(mapStateToProps,
    {
        follow,
        unFollow,
        setUsers,
        setCurrentPage,
        setTotalUserCount,
        toggleIsFetching,
    }
    )(UsersContainer)

