import React, {FC} from 'react';
import s from "./ProfileInfo.module.css"
import {getCurrentUserProfile} from "redux/profilePage-reducer";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import {useSelector} from "react-redux";
import {getAuthData} from "redux/auth-reducer";

type ProfileInfoType = {
    userStatus: string
    updateStatus: (status: string) => void
    photoLarge: string


}


export const ProfileInfo: FC<ProfileInfoType> = ({userStatus, updateStatus, photoLarge}) => {
    const userProfile = useSelector(getCurrentUserProfile)
    const authData = useSelector(getAuthData)

    return (
        <div>
            <div className={s.content}>
                <div>
                    {userProfile !== null &&
                        <img className={s.profileImg} src={userProfile.photos.small !== null ?
                            userProfile.photos.small: photoLarge}
                             alt="imageUser"/>
                    }
                </div>

                <ProfileStatus
                    userStatus={userStatus}
                    updateStatus={updateStatus}
                    userProfile={userProfile}
                    authData={authData}

                />
            </div>
        </div>)
}