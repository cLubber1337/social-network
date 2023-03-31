import React from 'react';
import logo from '../../assets/logo.png'
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {getAuthData, getAuthUserData, getIsAuth, logout} from "redux/auth-reducer";
import {useDispatch, useSelector} from "react-redux";


export const Header = () => {
    const dispatch = useDispatch()
    const AuthData = useSelector(getAuthData)
    const isAuth = useSelector(getIsAuth)

    React.useEffect(() => {
        dispatch(getAuthUserData())
    }, [])

    const onHandleLogout = () => {
        dispatch(logout())
    }

    return (
        <div className={s.header}>
            <img src={logo} alt="logo" className={s.logo}/>
            <div className={s.loginBlock}>
                <NavLink className={s.loginLink} to={"/login"}>
                    {
                        isAuth ? AuthData.login : "Login"
                    }
                </NavLink>
                {isAuth && <NavLink onClick={onHandleLogout} to={"/login"} className={s.logoutLink}>
                    {
                        "Logout"
                    }
                </NavLink>}
            </div>

        </div>
    )
}