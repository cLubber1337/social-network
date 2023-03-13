import React, {FC} from 'react';
import s from "./ProfileInfo.module.css"
import {ProfileType} from "../../../redux/profilePage-reducer";
import ProfileStatus from "../ProfileStatus/ProfileStatus";

type ProfileInfoType = {
    profile: ProfileType | null
    userStatus: string
    updateStatus: (status: string) => void
    photoLarge: string
}


export const ProfileInfo: FC<ProfileInfoType> = ({profile, userStatus, updateStatus, photoLarge}) => {

    return (
        <div>
            <div className={s.content}>

                <div>
                    {profile !== null ?
                        <img className={s.profileImg} src={profile.photos.small !== null ?
                            profile.photos.small: photoLarge}
                             alt="imageUser"/>
                        : ""
                    }
                </div>

                <ProfileStatus userStatus={userStatus} updateStatus={updateStatus}/>
            </div>
        </div>)
}