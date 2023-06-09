import React from "react"
import { Box, Paper } from "@mui/material"
import styles from "pages/LoginPage/login-page.module.css"
import { reduxForm } from "redux-form"
import { FormDataType, LoginForm } from "components/LoginForm/LoginForm"
import { useDispatch, useSelector } from "react-redux"
import { login } from "redux/auth/reducer"
import { Redirect } from "react-router-dom"
import { selectIsAuth } from "redux/auth"

export const LoginPage = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(selectIsAuth)
  const onSubmit = (formData: FormDataType) => {
    dispatch(login(formData.Email, formData.Password, formData.rememberMe))
  }
  if (isAuth) {
    return <Redirect to={"/profile"} />
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 2,
          width: 400,
          height: 380,
        },
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <Paper elevation={3} className={styles.root}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
      </Paper>
    </Box>
  )
}

const LoginReduxForm = reduxForm<FormDataType>({ form: "login" })(LoginForm)