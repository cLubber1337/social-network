import React, { ComponentType } from "react"
import { Profile } from "pages/MyProfilePage/Profile"
import { connect } from "react-redux"
import { AppStateType } from "redux/store"
import { getStatus, getUserProfile, updateStatus } from "redux/profile/reducer"
import { RouteComponentProps, withRouter } from "react-router-dom"
import { compose } from "redux"
import withAuthRedirect from "hoc/withAuthRedirect"
import { ProfileType } from "redux/profile"

type MapStatePropsType = {
  profile: ProfileType | null
  userStatus: string
  photoLarge: string
  authUserId: number | null
  isAuth: boolean
}

type MapDispatchPropsType = {
  getUserProfile: (userID: string) => void
  getStatus: (userID: string) => void
  updateStatus: (status: string) => void
}

type PathParamsType = {
  userID: string
}

type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userID = this.props.match.params.userID
    if (!userID && this.props.authUserId !== null) {
      userID = String(this.props.authUserId)
    }
    if (userID !== String(this.props.authUserId) || this.props.profile === null) {
      this.props.getStatus(userID)
      this.props.getUserProfile(userID)
    }
  }

  render() {
    return <Profile {...this.props} />
  }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  profile: state.profilePage.profile,
  userStatus: state.profilePage.userStatus,
  photoLarge: state.usersPage.photoLarge,
  authUserId: state.authorization.data.id,
  isAuth: state.authorization.isAuth,
})

export default compose<ComponentType>(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
