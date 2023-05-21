import React, { ComponentType } from "react"
import { connect } from "react-redux"
import { AppStateType } from "redux/store"
import { setCurrentPage, setTotalUserCount, setUsers, toggleIsFetching } from "redux/users/reducer"
import Users from "./Users"
import Preloader from "../common/Preloader"
import { usersAPI } from "api/api"
import withAuthRedirect from "../../hoc/withAuthRedirect"
import { compose } from "redux"
import {
  selectCurrentPage,
  selectFollowingInProgress,
  selectIsFetching,
  selectPageSize,
  selectTotalUserCount,
  getUsers,
} from "redux/users/selectors"
import { UsersType } from "redux/users"

type MapStateToPropsType = {
  users: UsersType[]
  pageSize: number
  totalUserCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: number[]
}
type UsersPropsType = {
  users: UsersType[]
  setUsers: (users: UsersType[]) => void
  setCurrentPage: (page: number) => void
  setTotalUserCount: (totalCount: number) => void
  toggleIsFetching: (isFetching: boolean) => void
  pageSize: number
  totalUserCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: number[]
}

class UsersContainer extends React.Component<UsersPropsType> {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(data.items)
      this.props.setTotalUserCount(data.totalCount)
    })
  }

  componentWillUnmount() {
    this.props.setCurrentPage(1)
  }

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            users={this.props.users}
            pageSize={this.props.pageSize}
            totalUserCount={this.props.totalUserCount}
            currentPage={this.props.currentPage}
            followingInProgress={this.props.followingInProgress}
          />
        )}
      </>
    )
  }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    users: getUsers(state),
    pageSize: selectPageSize(state),
    totalUserCount: selectTotalUserCount(state),
    currentPage: selectCurrentPage(state),
    isFetching: selectIsFetching(state),
    followingInProgress: selectFollowingInProgress(state),
  }
}

export default compose<ComponentType>(
  connect(mapStateToProps, {
    setUsers,
    setCurrentPage,
    setTotalUserCount,
    toggleIsFetching,
  }),
  withAuthRedirect
)(UsersContainer)
