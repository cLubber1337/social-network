import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {ProfileType, setUserProfile} from "../../redux/profilePage-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    profile: ProfileType | null
}
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
type PathParamsType = {
    userID: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userID = this.props.match.params.userID
        if(!userID) {
            userID = "2"
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
            .then(res => {
                this.props.setUserProfile(res.data)
            })
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }

}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})


let ProfileWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(ProfileWithRouter)