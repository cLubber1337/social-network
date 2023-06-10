import React, { FC } from "react"
import { Field, InjectedFormProps } from "redux-form"
import style from "./add-message-form.module.css"
import { maxLengthCreator, requiredField } from "utils/validators/validators"
import { Textarea } from "components/common/FormsControls/FormsControls"

export type FormDataForAddMessageType = {
  newMessageBody: string
}
const maxLength = maxLengthCreator(50)

export const AddMessageForm: FC<InjectedFormProps<FormDataForAddMessageType>> = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <Field
          name={"newMessageBody"}
          placeholder={"Enter your message"}
          component={Textarea}
          validate={[requiredField, maxLength]}
        />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button className={style.button}>Send</button>
        </div>
      </form>
    </div>
  )
}
