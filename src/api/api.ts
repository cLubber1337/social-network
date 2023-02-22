import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "2a8c69e4-572a-4487-8ff6-116dea09581f"}
})


export const getUsers = (currentPage: number, pageSize: number) => {
    return instance
        .get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
            {withCredentials: true}
        ).then(res => res.data)

}