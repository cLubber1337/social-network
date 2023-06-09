import axios from "axios"
import { UsersType } from "redux/users"
import { ProfileTypeForUpdate } from "redux/profile"

type ResponseType = {
  items: UsersType[]
  error: null | string
  totalCount: number
}

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "2a8c69e4-572a-4487-8ff6-116dea09581f" },
})

export const usersAPI = {
  getUsers: (currentPage: number, pageSize: number, searchValue: string) => {
    return instance
      .get<ResponseType>(`/users?page=${currentPage}&count=${pageSize}&term=${searchValue}`)
      .then((res) => res.data)
  },
  getProfile: (userID: string) => {
    console.warn("Obsolete method. Please profileAPI object.")
    return profileAPI.getProfile(userID)
  },
  follow: (userID: number) => {
    return instance.post(`follow/${userID}`)
  },
  unFollow: (userID: number) => {
    return instance.delete(`follow/${userID}`)
  },
  getFriends: (currentPage: number, pageSize: number, searchValue: string) => {
    return instance
      .get<ResponseType>(
        `users?page=${currentPage}&count=${pageSize}&friend=true&term=${searchValue}`
      )
      .then((res) => res.data)
  },
}
export const authAPI = {
  me: () => {
    return instance.get("auth/me")
  },
  loggIn: (email: string, password: string, rememberMe: boolean = false) => {
    return instance.post("/auth/login", { email, password, rememberMe })
  },
  loggOut: () => {
    return instance.delete("/auth/login")
  },
}
export const profileAPI = {
  getProfile: (userID: string) => {
    return instance.get(`profile/${userID}`)
  },
  getStatus: (userId: string) => {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus: (status: string) => {
    return instance.put(`profile/status`, { status })
  },
  updatePhoto: (photo: File) => {
    const formData = new FormData()
    formData.append("image", photo)
    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  },
  updateProfile: (profile: ProfileTypeForUpdate) => {
    return instance.put(`profile`, profile)
  },
}
