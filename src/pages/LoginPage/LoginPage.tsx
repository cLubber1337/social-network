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
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mb: 20,
      }}
    >
      <Paper elevation={1} className={styles.paper}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
      </Paper>
      <div className={styles.credentials}>
        <h4>Please use the following test login credentials to log in:</h4>
        <p>Email: free@samuraijs.com</p>
        <p>Password: free</p>
      </div>
    </Box>
  )
}

const LoginReduxForm = reduxForm<FormDataType>({ form: "login" })(LoginForm)
