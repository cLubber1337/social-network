import styles from "pages/LoginPage/login-page.module.css"
import { Field, InjectedFormProps } from "redux-form"
import React, { FC } from "react"
import { requiredField } from "utils/validators/validators"
import { Input } from "components/common/FormsControls/FormsControls"

export type FormDataType = {
  Email: string
  Password: string
  rememberMe: boolean
}

export const LoginForm = ({ handleSubmit, error }: InjectedFormProps<FormDataType>) => {
  return (
    <form onSubmit={handleSubmit} className={styles.content}>
      <Field name={"Email"} component={Input} validate={[requiredField]} />
      <Field name={"Password"} component={Input} validate={[requiredField]} />
      <div className={styles.checkboxText}>
        <Field
          type="checkbox"
          className={styles.checkbox}
          component={"input"}
          name={"rememberMe"}
        />
        <div className={styles.text}>Remember Me</div>
      </div>
      {error && <div className={styles.commonError}>{error}</div>}
      <button className={styles.button}>LOGIN</button>
    </form>
  )
}
