import profile from "components/NavBar/icon/profile.png"
import chat from "components/NavBar/icon/chat.png"
import users from "components/NavBar/icon/users.png"

export const NAVBAR_NAVIGATION = [
  {
    path: "/",
    name: "My profile",
    icon: profile,
  },
  {
    path: "/dialogs",
    name: "Messages",
    icon: chat,
  },
  {
    path: "/users",
    name: "Find users",
    icon: users,
  },
]
