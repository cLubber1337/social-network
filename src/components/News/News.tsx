import React from "react"
import style from "./News.module.css"
import { useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import { selectIsAuth } from "redux/auth"

export const News = () => {
  const isAuth = useSelector(selectIsAuth)
  if (!isAuth) return <Redirect to={"/login"} />
  return <div className={style.content}>Yellow journalism</div>
}
