import React from "react"
import s from "./Settings.module.css"
import { useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import { selectIsAuth } from "redux/auth"

export const Settings = () => {
  const isAuth = useSelector(selectIsAuth)
  if (!isAuth) return <Redirect to={"/login"} />
  return (
    <div className={s.content}>
      <div>News</div>
    </div>
  )
}
