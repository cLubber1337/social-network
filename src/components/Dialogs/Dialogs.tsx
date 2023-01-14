import React from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    AddMessageActionType,
    AddPostActionType,
    DialogsDataType, DialogsPageType,
    MessagesDataType, ProfilePageType, UpdateNewMessageTextType,
    UpdateNewPostTextType
} from "../../redux/state";

type PropsType = {
    dialogsPage: DialogsPageType
    dialogs: DialogsDataType[]
    messages: MessagesDataType[]
    dispatch: (action: AddMessageActionType | UpdateNewMessageTextType) => void
}



export const Dialogs = (props:PropsType) => {

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <DialogItem dialogs={props.dialogs}/>
            </div>

            <div className={s.messages}>
                <Message messages={props.messages}
                         dispatch={props.dispatch}
                         dialogsPage={props.dialogsPage}
                />
            </div>

        </div>
    )
}