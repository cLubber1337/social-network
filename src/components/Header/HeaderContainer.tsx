import React from 'react';
import {setAuth, setUserData} from "../../redux/auth-reducer";
import {Header} from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {authAPI} from "../../api/api";


export const HeaderContainer: React.FC = React.memo(() => {
    const dispatch = useDispatch()
    const AuthData = useSelector((state: AppStateType) => state.authorization)


    React.useEffect(() => {
        authAPI.me()
            .then(({data}) => {
                if (data.resultCode === 0) {
                    dispatch(setUserData(data))
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



