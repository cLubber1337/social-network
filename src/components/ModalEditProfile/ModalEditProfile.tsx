import React, { useEffect, useState } from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import { Checkbox } from "@mui/material"
import { getUserProfile, ProfileType, ProfileTypeForUpdate } from "redux/profile"
import { profileAPI } from "api/api"
import { useDispatch, useSelector } from "react-redux"
import { selectAuthData } from "redux/auth"

type Props = {
  userProfile: ProfileType | null
}

export const ModalEditProfile = ({ userProfile }: Props) => {
  const dispatch = useDispatch()
  const authData = useSelector(selectAuthData)
  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClickClose = () => {
    setOpen(false)
  }

  const [contacts, setContacts] = useState<{ [key: string]: string | null }>({})
  const [fullName, setFullName] = useState<string>("")
  const [aboutMe, setAboutMe] = useState<string>("")
  const [jobDescription, setJobDescription] = useState<string | null>("")
  const [lookingForAJob, setLookingForAJob] = useState<boolean>(false)

  const handleSave = async () => {
    const formData: ProfileTypeForUpdate = {
      aboutMe: aboutMe,
      userId: authData.id,
      fullName: fullName,
      lookingForAJob: lookingForAJob,
      lookingForAJobDescription: jobDescription,
      contacts: {
        github: contacts.github,
        vk: contacts.vk,
        facebook: contacts.facebook,
        instagram: contacts.instagram,
        twitter: contacts.twitter,
        website: contacts.website,
        youtube: contacts.youtube,
        mainLink: contacts.mainLink,
      },
    }
    try {
      const response = await profileAPI.updateProfile(formData)
      if (response.data.resultCode === 0 && userProfile !== null) {
        setOpen(false)
        dispatch(getUserProfile(userProfile?.userId.toString()))
      } else {
        alert(response.data.messages[0])
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (userProfile !== null) {
      setContacts(userProfile.contacts)
      setAboutMe(userProfile.aboutMe)
      setFullName(userProfile.fullName)
      setLookingForAJob(userProfile.lookingForAJob)
      setJobDescription(userProfile.lookingForAJobDescription)
    }
  }, [userProfile])

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} style={{ width: "100%" }}>
        edit profile
      </Button>
      <Dialog open={open} onClose={handleClickClose}>
        <DialogTitle>Edit your profile</DialogTitle>
        <DialogContent>
          <DialogContentText>Edit profile:</DialogContentText>
          <TextField
            required
            autoFocus
            margin="dense"
            id="fullName"
            defaultValue={userProfile?.fullName}
            label="Full name"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setFullName(event.target.value)
            }
          />
          <TextField
            required
            autoFocus
            margin="dense"
            id="aboutMe"
            defaultValue={userProfile?.aboutMe}
            label="About me"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setAboutMe(event.target.value)
            }
          />
          Looking for job:
          <Checkbox
            defaultChecked={lookingForAJob}
            required
            onChange={(event) => setLookingForAJob(event.target.checked)}
          />
          <TextField
            required
            autoFocus
            margin="dense"
            id="lookingForAJobDescription"
            defaultValue={userProfile?.lookingForAJobDescription}
            label="Looking for a job description"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setJobDescription(event.target.value)
            }
          />
          <DialogContentText>Edit contacts:</DialogContentText>
          {userProfile &&
            Object.keys(userProfile.contacts).map((key) => {
              const contactValue = userProfile.contacts[key as keyof typeof userProfile.contacts]
              return (
                <TextField
                  key={key}
                  required
                  autoFocus
                  margin="dense"
                  id={key}
                  label={key}
                  defaultValue={contactValue}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setContacts((prevValues) => ({ ...prevValues, [key]: event.target.value }))
                  }
                  type="text"
                  fullWidth
                  variant="outlined"
                />
              )
            })}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClose}> Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
