import React from "react"
import { Button, Menu, MenuItem } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { getAuthData, getIsAuth, logout } from "redux/auth-reducer"
import { NavLink } from "react-router-dom"
import s from "./Header.module.css"

export default function LoginMenu() {
  const dispatch = useDispatch()
  const AuthData = useSelector(getAuthData)
  const isAuth = useSelector(getIsAuth)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isAuth) {
      setAnchorEl(event.currentTarget)
    }
  }

  const handleLogout = () => {
    dispatch(logout())
    setAnchorEl(null)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <NavLink to={"/login"} className={s.loginLink}>
        <Button
          sx={{ color: "white" }}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          {isAuth ? AuthData.login : "Login"}
        </Button>
      </NavLink>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  )
}
