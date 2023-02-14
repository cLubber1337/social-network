import React from 'react';
import style from "./Users.module.css";
import {UsersType} from "../../redux/usersPage-reducer";
import {NavLink} from "react-router-dom";


type UsersPropsType = {
    users: UsersType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    pageSize: number
    totalUserCount: number
    currentPage: number
    onClickPageChanged: (currentPage: number) => void

}

const Users: React.FC<UsersPropsType> = ({
                                             users,
                                             unFollow,
                                             follow,
                                             currentPage,
                                             totalUserCount,
                                             pageSize,
                                             onClickPageChanged
                                         }) => {

    let pageCount = Math.ceil(totalUserCount / pageSize)
    let page = []
    for (let i = 1; i <= pageCount; i++) {
        page.push(i)
    }
    return (
        <div className={style.content}>
            {users.map((user) =>
                <div className={style.subscriber} key={user.id}>
                    <div className={style.photoStatus}>
                        <NavLink to={`/profile/${user.id}`}>
                            <img className={style.photo}
                                 src={user.photos.small === null ? "https://cdn-icons-png.flaticon.com/512/149/149071.png" : user.photos.small }
                                 alt="user"/>
                        </NavLink>
                        <button className={style.button}
                                onClick={user.followed ? () => unFollow(user.id) : () => follow(user.id)}>
                            {user.followed ? "Unfollow" : "Follow"}
                        </button>
                    </div>
                    <div className={style.description}>
                        <div className={style.nameStatus}>
                        <span>
                            <strong>{user.name}</strong>
                        </span>
                            <span>
                            status: {user.status}
                        </span>
                        </div>
                        <div className={style.location}>
                        <span>
                            Country: {"location.country"}
                        </span>
                            <span>
                            City: {"location.city"}
                        </span>
                        </div>
                    </div>
                </div>)}
            <div className={style.pagination}>
                {page.map((page) => {
                    return (
                        <span key={page}
                              className={currentPage === page ? style.active : style.page}
                              onClick={() => onClickPageChanged(page)}
                        >
                                {page}
                        </span>
                    )
                })}
            </div>
        </div>
    );
}


export default Users