import React from 'react';
import axios from "axios";
import {setAuth, setUserData} from "../../redux/auth-reducer";
import {Header} from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";


export const HeaderContainer: React.FC = React.memo(() => {
    const dispatch = useDispatch()
    const AuthData = useSelector((state: AppStateType) => state.authorization)


    React.useEffect(() => {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
            withCredentials: true
        })
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setUserData(res.data))
                    dispatch(setAuth(true))
                }
            })
    }, [])

    return (
        <>
            <Header {...AuthData}/>
        </>
    )
})



