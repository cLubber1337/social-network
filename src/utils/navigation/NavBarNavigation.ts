import profile from "assets/icon/profile.png"
import chat from "assets/icon/chat.png"
import users from "assets/icon/users.png"
import search from "assets/icon/search.png"

export const NAVBAR_NAVIGATION = [
  {
    path: "/profile/:userID?",
    name: "My profile",
    icon: profile,
  },
  {
    path: "/friends",
    name: "Friends",
    icon: users,
  },
  {
    path: "/dialogs",
    name: "Messages",
    icon: chat,
  },
  {
    path: "/users",
    name: "Find users",
    icon: search,
  },
]
