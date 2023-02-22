import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {
    follow,
    toggleIsFetching,
    setCurrentPage,
    setTotalUserCount,
    setUsers,
    unFollow,
    UsersType,
} from "../../redux/usersPage-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {getUsers} from "../../api/api";

type MapStateToPropsType = {
    users: UsersType[];
    pageSize: number;
    totalUserCount: number;
    currentPage: number;
    isFetching: boolean;
};
type UsersPropsType = {
    users: UsersType[];
    follow: (userId: number) => void;
    unFollow: (userId: number) => void;
    setUsers: (users: UsersType) => void;
    setCurrentPage: (page: number) => void;
    setTotalUserCount: (totalCount: number) => void;
    toggleIsFetching: (isFetching: boolean) => void;
    pageSize: number;
    totalUserCount: number;
    currentPage: number;
    isFetching: boolean;
};

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        getUsers(this.props.currentPage, this.props.pageSize)
            .then((data) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUserCount(data.totalCount);
            });
    }

    onClickPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage);
        this.props.toggleIsFetching(true);
        getUsers(currentPage, this.props.pageSize)
            .then((data) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
    };

    render() {
        return (
            <>
                {this.props.isFetching ? (
                    <Preloader/>
                ) : (
                    <Users
                        users={this.props.users}
                        follow={this.props.follow}
                        unFollow={this.props.unFollow}
                        pageSize={this.props.pageSize}
                        totalUserCount={this.props.totalUserCount}
                        currentPage={this.props.currentPage}
                        onClickPageChanged={this.onClickPageChanged}
                    />
                )}
            </>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    };
};

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUserCount,
    toggleIsFetching,
})(UsersContainer);
