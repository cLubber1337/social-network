import React, { ChangeEvent, memo, useEffect } from "react"
import s from "./ProfileStatus.module.css"
import { IconButton, TextField } from "@mui/material"
import DoneIcon from "@mui/icons-material/Done"
import EditIcon from "@mui/icons-material/Edit"
import { ProfileType } from "redux/profile"
import { AuthDataType } from "redux/auth"

type ProfileStatusType = {
  userStatus: string
  updateStatus: (status: string) => void
  authData: AuthDataType
  userProfile: ProfileType | null
}

const ProfileStatus = memo(
  ({ userStatus, updateStatus, authData, userProfile }: ProfileStatusType) => {
    const [editMode, setEditMode] = React.useState(false)
    const [status, setStatus] = React.useState(userStatus)

    const activateEditMode = () => {
      setEditMode(true)
    }
    const deactivateEditMode = () => {
      setEditMode(false)
      updateStatus(status)
    }
    const onBlurMode = () => {
      setEditMode(true)
      setStatus(userStatus)
    }
    const onKeyEnter = (event: string) => {
      if (event === "Enter") {
        setEditMode(false)
        updateStatus(status)
      }
    }
    const editStatusOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setStatus(e.currentTarget.value)
    }
    useEffect(() => {
      setStatus(userStatus)
    }, [userStatus])

    return (
      <div className={s.content}>
        {!editMode && (
          <div>
            <span className={s.statusText}>{userStatus}</span>
            {authData.id === userProfile?.userId && (
              <IconButton
                color={"primary"}
                sx={{ mb: "10px", ml: "5px" }}
                onClick={activateEditMode}
              >
                <EditIcon fontSize={"small"} />
              </IconButton>
            )}
          </div>
        )}
        {editMode && (
          <div className={s.input}>
            <TextField
              id="outlined-helperText"
              autoFocus
              value={status}
              size={"small"}
              sx={{ width: "600px" }}
              onChange={editStatusOnChange}
              onBlur={onBlurMode}
              onKeyDown={(event) => onKeyEnter(event.code)}
            />
            <IconButton
              size={"small"}
              color={"default"}
              sx={{ mt: "3px" }}
              onMouseDown={deactivateEditMode}
            >
              <DoneIcon fontSize={"medium"} />
            </IconButton>
          </div>
        )}
      </div>
    )
  }
)

export default ProfileStatus
