import React from "react"
import s from "./Music.module.css"
import Clock from "../common/Clock"
import { useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import { selectIsAuth } from "redux/auth"

export const Music = () => {
  const isAuth = useSelector(selectIsAuth)
  if (!isAuth) return <Redirect to={"/login"} />
  return (
    <div className={s.content}>
      <Clock />
    </div>
  )
}
