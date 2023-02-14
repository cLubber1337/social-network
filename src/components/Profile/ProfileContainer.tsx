import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {ProfileType, setUserProfile} from "../../redux/profilePage-reducer";

type ProfilePropsType = {
    setUserProfile: (profileData: ProfileType[]) => void
}


class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(res => {
                this.props.setUserProfile(res.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }

}

let mapStateToProps = (state: AppStateType) => ({
    a: 13
})

export default connect(mapStateToProps, {
    setUserProfile
})(ProfileContainer)