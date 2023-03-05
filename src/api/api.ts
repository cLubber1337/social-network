import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "2a8c69e4-572a-4487-8ff6-116dea09581f"}
})

export const usersAPI = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance
            .get(
                `/users?page=${currentPage}&count=${pageSize}`,
                {withCredentials: true}
            ).then(res => res.data)
    },
    getProfile: (userID: string) => {
        return instance
            .get(`/profile/${userID}`)
    },
    follow: (userID: number) => {
        return instance.post(`follow/${userID}`)
    },
    unFollow: (userID: number) => {
        return instance.delete(`follow/${userID}`)
    }

}
export const authAPI = {
    me: () => {
        return instance
        .get("auth/me", {
            withCredentials: true
        })
    }
}



