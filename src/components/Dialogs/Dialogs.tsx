import React from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {StoreType} from "../../redux/store";
import {MessageContainer} from "./Message/MessageContainer";

type PropsType = {
   store: StoreType
}

export const Dialogs: React.FC<PropsType> = ({store}) => {
    let state = store.getState().dialogsPage

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <DialogItem dialogs={state.dialogsData}/>
            </div>


            <div className={s.messages}>
                <MessageContainer store={store}/>
            </div>

        </div>
    )
}