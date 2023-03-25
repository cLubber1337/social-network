import React from 'react';
import {Box, Paper} from "@mui/material";
import styles from "./Login.module.css"
import {reduxForm} from "redux-form";
import {FormDataType, LoginForm} from "./LoginForm";

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
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
    );
}

const LoginReduxForm= reduxForm<FormDataType>(
    {
        form: "login"
    }
)(LoginForm)

