import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { Provider } from "react-redux"
import { HashRouter } from "react-router-dom"
import { store } from "redux/store"
import { createTheme, ThemeProvider } from "@mui/material"

const theme = createTheme({
  palette: {
    primary: {
      main: "#046380",
    },
  },
})

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </HashRouter>,
  document.getElementById("root")
)
