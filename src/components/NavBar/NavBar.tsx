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
      {/*------------------- Friends---------------------------*/}
      <hr />
      <span>Friends</span>
      <div className={s.sidebar}>
        <div>
          <img
            src={
              "https://img.freepik.com/free-vector/watercolor-cute-girl-raincoat-holding-umbrella-vector-illustration-white-background_8130-956.jpg?w=900&t=st=1671832719~exp=1671833319~hmac=33b0f4e63fa3981ef3bd1631dbcb587c43c35b2f48259ec137492f9086edf5f1"
            }
            alt={""}
            className={s.photo}
          />
          <div>name</div>
        </div>
        <div>
          <img
            src={
              "https://img.freepik.com/free-vector/watercolor-cute-girl-raincoat-holding-umbrella-vector-illustration-white-background_8130-956.jpg?w=900&t=st=1671832719~exp=1671833319~hmac=33b0f4e63fa3981ef3bd1631dbcb587c43c35b2f48259ec137492f9086edf5f1"
            }
            alt={""}
            className={s.photo}
          />
          <div>name</div>
        </div>
      </div>
    </div>
  )
}
