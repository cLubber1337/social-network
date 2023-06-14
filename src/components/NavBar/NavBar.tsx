import React from "react"
import styles from "./NavBar.module.css"
import { NavLink } from "react-router-dom"
import { NAVBAR_NAVIGATION } from "utils/navigation/NavBarNavigation"
import { useDispatch, useSelector } from "react-redux"
import { selectAuthData } from "redux/auth"
import { getStatus, getUserProfile, selectCurrentUserProfile } from "redux/profile"

export const NavBar = () => {
  const authData = useSelector(selectAuthData)
  const dispatch = useDispatch()
  const profile = useSelector(selectCurrentUserProfile)

  const handleClickMyProfile = () => {
    if (authData.id !== profile?.userId) {
      dispatch(getUserProfile(String(authData.id)))
      dispatch(getStatus(String(authData.id)))
    }
  }
  return (
    <div className={styles.NavBar}>
      <ul>
        {NAVBAR_NAVIGATION.map(({ path, name, icon }) => (
          <NavLink
            onClick={path !== "/profile" ? () => null : handleClickMyProfile}
            exact
            activeClassName={styles.active}
            to={path === "/profile" ? `${path}/${authData.id}` : path}
            key={name}
          >
            <li className={styles.item}>
              <img src={icon} alt={name} />
              <span className={styles.name}>{name}</span>
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  )
}
