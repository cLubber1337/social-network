import React from "react"
import styles from "components/Dialogs/Dialogs/dialogs.module.css"
import { NavLink } from "react-router-dom"
import { UsersType } from "redux/users"
import { Avatar } from "@mui/material"
import { UserIdContext } from "pages/MessagesPage/MessagesPage"

type PropsType = {
  dialogsElements: UsersType[]
}

export const Dialogs: React.FC<PropsType> = ({ dialogsElements }) => {
  const { setUserId, userId } = React.useContext(UserIdContext)

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__items}>
        {dialogsElements.map(({ name, id, photos }) => (
          <NavLink to={`${/dialogs/}${id}`} key={id} className={styles.dialogs__item}>
            <div>
              <Avatar
                className={id === userId ? `${styles.photo} ${styles.active}` : styles.photo}
                sx={{ width: 56, height: 56 }}
                onClick={() => setUserId(id)}
                src={
                  photos.small === null
                    ? "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    : photos.small
                }
                alt="user"
              />
            </div>
            <div className={styles.name}>
              <span>{name}</span>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  )
}
