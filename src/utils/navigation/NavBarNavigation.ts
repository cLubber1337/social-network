import profile from "components/NavBar/icon/profile.png"
import chat from "components/NavBar/icon/chat.png"
import news from "components/NavBar/icon/news.png"
import music from "components/NavBar/icon/music.png"
import settings from "components/NavBar/icon/settings.png"
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
    path: "/news",
    name: "News",
    icon: news,
  },
  {
    path: "/music",
    name: "Music",
    icon: music,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: settings,
  },
  {
    path: "/users",
    name: "Find users",
    icon: users,
  },
]
