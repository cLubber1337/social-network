import React from 'react';
import {UsersType} from "../../redux/usersPage-reducer";
import axios from "axios";
import Users from "./Users";

type UsersPropsType = {
    users: UsersType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UsersType) => void
    setCurrentPage: (page: number) => void
    setTotalUserCount: (totalCount: number) => void
    pageSize: number
    totalUserCount: number
    currentPage: number

}

class UsersAPIComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                       this.props.setUsers(res.data.items);
                       this.props.setTotalUserCount(res.data.totalCount)
                })
    }

    onClickPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(res => (this.props.setUsers(res.data.items)))
    }

    render() {
        return (
            <Users users={this.props.users}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   pageSize={this.props.pageSize}
                   totalUserCount={this.props.totalUserCount}
                   currentPage={this.props.currentPage}
                   onClickPageChanged={this.onClickPageChanged}
            />
        )
    }
}

export default UsersAPIComponent