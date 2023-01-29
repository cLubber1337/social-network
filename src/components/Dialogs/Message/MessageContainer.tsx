import React, {ChangeEvent} from 'react';
import {StoreType} from "../../../redux/store";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogsPage-reducer";
import {Message} from "./Message";

type PropsType = {
    store: StoreType
}

export const MessageContainer: React.FC<PropsType> = ({store}) => {

    let messages = store.getState().dialogsPage.messagesData
    let newMessageText = store.getState().dialogsPage.newMessageText

    const addMessage = () => {
        store.dispatch(addMessageActionCreator())
    }
    const updateNewMessageText = (NewMessageText: string) => {
        store.dispatch(updateNewMessageTextActionCreator(NewMessageText))
    }

    return (
        <div>
            <Message messages={messages}
                     updateNewMessageText={updateNewMessageText}
                     addMessage={addMessage}
                     newMessageText={newMessageText as string}
            />
        </div>
    )
}