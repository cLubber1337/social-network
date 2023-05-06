import React from "react"
import styles from "./FormsControls.module.css"

export const Textarea = ({ input, meta }: any) => {
  let isError = meta.touched && meta.error
  return (
    <div>
      <div>
        <textarea
          className={isError ? `${styles.formControl} ${styles.error}` : `${styles.formControl}`}
          {...input}
        />
      </div>
      <div>
        {isError && <span className={isError ? `${styles.errorText}` : ``}>{meta.error}</span>}
      </div>
    </div>
  )
}

export const Input = ({ input, meta }: any) => {
  let isError = meta.touched && meta.error
  let name = input.name

  return (
    <div>
      <div>
        <input
          placeholder={name}
          type={name === "Password" ? "password" : "text"}
          {...input}
          className={isError ? `${styles.input} ${styles.error}` : `${styles.input}`}
        />
      </div>
      <div>
        {isError && <span className={isError ? `${styles.errorText}` : ``}>{meta.error}</span>}
      </div>
    </div>
  )
}
