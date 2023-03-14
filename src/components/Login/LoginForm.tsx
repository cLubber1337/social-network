import styles from "./Login.module.css";
import {Field, InjectedFormProps} from "redux-form";
import React, {FC} from "react";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm: FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form
            onSubmit={props.handleSubmit}
            className={styles.content}>
            <Field
                name={"login"}
                placeholder={"Login"}
                component={"input"}
                className={styles.login}
            />
            <Field
                name={"password"}
                placeholder={"Password"}
                component={"input"}
                className={styles.password}
            />
            <div className={styles.checkboxText}>

                <Field type="checkbox"
                       className={styles.checkbox}
                       component={"input"}
                       name={"rememberMe"}
                />
                <div className={styles.text}>
                    Remember Me
                </div>
            </div>
            <button className={styles.button}>
                LOGIN
            </button>
        </form>
    )
}