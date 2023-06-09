import React from "react"
import styles from "./NavBar.module.css"
import { NavLink, useLocation } from "react-router-dom"
import { NAVBAR_NAVIGATION } from "utils/navigation/NavBarNavigation"
import { useSelector } from "react-redux"
import { selectAuthData } from "redux/auth"

export const NavBar = () => {
  const authData = useSelector(selectAuthData)
  const location = useLocation()
  console.log(location.pathname)

  return (
    <div className={styles.NavBar}>
      <ul>
        {NAVBAR_NAVIGATION.map(({ path, name, icon }) => (
          <NavLink
            exact
            activeClassName={styles.active}
            to={path === "/profile/:userID?" ? `/profile/${authData.id}` : path}
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
