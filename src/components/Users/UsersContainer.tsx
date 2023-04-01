import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {
    follow,
    toggleIsFetching,
    setCurrentPage,
    setTotalUserCount,
    setUsers,
    unFollow,
    UsersType, toggleFollowingInProgress,
} from "../../redux/usersPage-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {usersAPI} from "../../api/api";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers
} from "redux/selectors/user.selector";

type MapStateToPropsType = {
    users: UsersType[];
    pageSize: number;
    totalUserCount: number;
    currentPage: number;
    isFetching: boolean;
    followingInProgress: number[]
};
type UsersPropsType = {
    users: UsersType[];
    follow: (userId: number) => void;
    unFollow: (userId: number) => void;
    setUsers: (users: UsersType) => void;
    setCurrentPage: (page: number) => void;
    setTotalUserCount: (totalCount: number) => void;
    toggleIsFetching: (isFetching: boolean) => void;
    toggleFollowingInProgress: (isFetching: boolean, userID: number) => void;
    pageSize: number;
    totalUserCount: number;
    currentPage: number;
    isFetching: boolean;
    followingInProgress: number[];
};

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then((data) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUserCount(data.totalCount);
            });
    }

    onClickPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(currentPage, this.props.pageSize)
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
                        followingInProgress={this.props.followingInProgress}
                        onClickPageChanged={this.onClickPageChanged}
                        toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                    />
                )}
            </>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    };
};

export default compose<ComponentType>(
    connect(mapStateToProps, {
        follow,
        unFollow,
        setUsers,
        setCurrentPage,
        setTotalUserCount,
        toggleIsFetching,
        toggleFollowingInProgress,
    }),
withAuthRedirect
)(UsersContainer)