import React from "react"
import styles from "./NavBar.module.css"
import { NavLink } from "react-router-dom"
import { NAVBAR_NAVIGATION } from "utils/navigation/NavBarNavigation"

export const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <ul>
        {NAVBAR_NAVIGATION.map(({ path, name, icon }) => (
          <NavLink exact activeClassName={styles.active} to={path} key={name}>
            <li className={styles.item}>
              <img src={icon} alt={name} />
              <span>{name}</span>
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  )
}
