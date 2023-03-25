import {Field, InjectedFormProps} from "redux-form";
import React, {FC} from "react";

export type FormDataForPostType = {
    post: string
}

export const PostForm: FC<InjectedFormProps<FormDataForPostType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name={"post"}
                placeholder={"Write a post"}
                component={"input"}
            />
            <button>ADD POST</button>
        </form>
    )
}