import React from "react"
import s from "./DialogItem.module.css"
import { NavLink } from "react-router-dom"
import { DialogsType } from "redux/dialogs"

type PropsType = {
  dialogs: DialogsType[]
}

export const DialogItem: React.FC<PropsType> = ({ dialogs }) => {
  return (
    <div className={s.dialogItem}>
      {dialogs.map((m) => (
        <NavLink to={`${/dialogs/}${m.id}`} key={m.id} className={s.dialog}>
          <div>
            <img
              className={s.photo}
              src="https://img.freepik.com/free-vector/smiling-male-photographer-with-professional-photo-camera_1284-6906.jpg?w=826&t=st=1671831494~exp=1671832094~hmac=f1dd0b0b3102251265054a3932435dbb3e51e266a3a6e66451f82e196014818e"
              alt={"dialog-photo"}
            />
          </div>
          <div className={s.name}>{m.name}</div>
        </NavLink>
      ))}
    </div>
  )
}
