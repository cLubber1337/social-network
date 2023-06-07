import React from "react"
import s from "./NavBar.module.css"
import { NavLink } from "react-router-dom"
import { NAVBAR_NAVIGATION } from "utils/navigation/NavBarNavigation"

export const NavBar = () => {
  return (
    <div className={s.NavBar}>
      <ul>
        {NAVBAR_NAVIGATION.map(({ path, name, icon }) => (
          <NavLink exact activeClassName={s.active} to={path} key={name}>
            <li className={s.item}>
              <img src={icon} alt={name} />
              <span>{name}</span>
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  )
}
