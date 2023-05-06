import React from "react"
import style from "./News.module.css"
import { useSelector } from "react-redux"
import { getIsAuth } from "redux/auth-reducer"
import { Redirect } from "react-router-dom"

export const News = () => {
  const isAuth = useSelector(getIsAuth)
  if (!isAuth) return <Redirect to={"/login"} />
  return <div className={style.content}>Yellow journalism</div>
}
