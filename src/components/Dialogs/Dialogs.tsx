import React from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPageType} from "../../redux/store";
import {Message} from "./Message/Message";

type PropsType = {
    dialogsPage: DialogsPageType
    newMessageText: string
    updateNewMessageText: (text: string) => void
    addMessage: () => void

}

export const Dialogs: React.FC<PropsType> = ({
                                                 dialogsPage,
                                                 updateNewMessageText,
                                                 addMessage,
                                                 newMessageText,
                                             }) => {


    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <DialogItem dialogs={dialogsPage}/>
            </div>


            <div className={s.messages}>
                <Message messages={dialogsPage}
                         updateNewMessageText={updateNewMessageText}
                         addMessage={addMessage}
                         newMessageText={newMessageText as string}
                />
            </div>

        </div>
    )
}

