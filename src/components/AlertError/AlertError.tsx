import React from "react"
import { AlertProps, AlertTitle, Snackbar } from "@mui/material"
import { errorAction, selectGlobalError } from "redux/app"
import { useDispatch, useSelector } from "react-redux"
import MuiAlert from "@mui/material/Alert"
import { useHistory } from "react-router-dom"

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={2} ref={ref} variant="filled" {...props} />
})

const AlertError = () => {
  const globalError = useSelector(selectGlobalError)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return
    }
    dispatch(errorAction(null))
    history.push("/")
  }

  const isOpen = globalError !== null

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={isOpen}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="error">
        <div>
          <AlertTitle>{globalError?.name}</AlertTitle>
          <div>{globalError?.message}</div>
          <div>{globalError?.stack}</div>
          <strong>
            "We're sorry, but it looks like there was an error loading the page. Please try
            reloading it in a few seconds. If that doesn't work, please try again later."
          </strong>
        </div>
      </Alert>
    </Snackbar>
  )
}

export default AlertError
