import styles from "./Login.module.css";
import {Field, InjectedFormProps} from "redux-form";
import React, {FC} from "react";
import {requiredField} from "utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControls";

export type FormDataType = {
    Email: string
    Password: string
    rememberMe: boolean
}

export const LoginForm: FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form
            onSubmit={props.handleSubmit}
            className={styles.content}>
            <Field
                name={"Email"}
                component={Input}
                validate={[requiredField]}
            />
            <Field
                name={"Password"}
                component={Input}
                validate={[requiredField]}

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
            {props.error && <div className={styles.commonError}>{props.error}</div>}
            <button className={styles.button}>
                LOGIN
            </button>
        </form>
    )
}