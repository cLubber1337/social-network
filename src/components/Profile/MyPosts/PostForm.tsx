import {Field, InjectedFormProps} from "redux-form";
import React, {FC} from "react";
import {maxLengthCreator, requiredField} from "utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

export type FormDataForPostType = {
    post: string
}

const maxLength = maxLengthCreator(10)

export const PostForm: FC<InjectedFormProps<FormDataForPostType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name="post"
                placeholder="Write a post"
                component={Textarea}
                validate={[requiredField, maxLength]}
            />
            <button>ADD POST</button>
        </form>
    )
}