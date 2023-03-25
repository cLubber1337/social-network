import React, {FC} from 'react';
import {Field, InjectedFormProps} from "redux-form";
import style from "./Dialogs.module.css"

export type FormDataForAddMessageType = {
    newMessageBody: string
}

export const AddMessageForm: FC<InjectedFormProps<FormDataForAddMessageType>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field
                    name={"newMessageBody"}
                    placeholder={"Enter your message"}
                    component={"textarea"}
                />
                <div>
                    <button className={style.button}>Send</button>
                </div>
            </form>
        </div>
    );
};

