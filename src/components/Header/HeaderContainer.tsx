import React from 'react';
import {getAuthUserData} from "../../redux/auth-reducer";
import {Header} from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";



export const HeaderContainer: React.FC = React.memo(() => {
    const dispatch = useDispatch()
    const AuthData = useSelector((state: AppStateType) => state.authorization)


    React.useEffect(() => {
        dispatch(getAuthUserData())
    }, [])



    return (
        <>
            <Header {...AuthData}/>
        </>
    )
})



