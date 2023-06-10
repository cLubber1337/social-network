import { Field, InjectedFormProps } from "redux-form"
import React from "react"
import { maxLengthCreator, requiredField } from "utils/validators/validators"
import { Textarea } from "components/common/FormsControls/FormsControls"
import { Button } from "@mui/material"

export type FormDataForPostType = {
  post: string
}

const maxLength = maxLengthCreator(30)

export const PostForm = (props: InjectedFormProps<FormDataForPostType>) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="post"
        placeholder="Write a post"
        component={Textarea}
        validate={[requiredField, maxLength]}
      />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginTop: "10px" }} type={"submit"} variant={"contained"}>
          ADD POST
        </Button>
      </div>
    </form>
  )
}
