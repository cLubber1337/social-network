import React, {RefObject} from 'react';
import s from "./Message.module.css"

type PropsType = {
    messages: MessagesDataType[]
}
type MessagesDataType = {
    id: number,
    message: string
}

export const Message = (props: PropsType) => {

    let messageElement = props.messages.map(m =>
        (<div className={s.message} key={m.id}>{m.message}</div>))

let newMessageElement: RefObject<HTMLTextAreaElement> = React.createRef()

    const addMessage = () => {
        alert(newMessageElement.current?.value)
    }


    return (
        <div className={s.allMessages}>
            {messageElement}
            <div>
                <textarea ref={newMessageElement}></textarea>
                <div>
                    <button onClick={addMessage}>send</button>
                </div>
            </div>
        </div>
    )
}