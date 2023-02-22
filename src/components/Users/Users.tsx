import React from "react";
import style from "./Users.module.css";
import {UsersType} from "../../redux/usersPage-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    users: UsersType[];
    follow: (userId: number) => void;
    unFollow: (userId: number) => void;
    pageSize: number;
    totalUserCount: number;
    currentPage: number;
    onClickPageChanged: (currentPage: number) => void;
};

const Users: React.FC<UsersPropsType> = ({
                                             users,
                                             unFollow,
                                             follow,
                                             currentPage,
                                             totalUserCount,
                                             pageSize,
                                             onClickPageChanged,
                                         }) => {
    let pageCount = Math.ceil(totalUserCount / pageSize);
    let page = [];
    for (let i = 1; i <= pageCount; i++) {
        page.push(i);
    }

    const unFollowOnClick = (userID: number) => {
        axios
            .delete(
                `https://social-network.samuraijs.com/api/1.0/follow/${userID}`,
                {withCredentials: true, headers: {"API-KEY": "2a8c69e4-572a-4487-8ff6-116dea09581f"}},
            )
            .then((res) => {
                if (res.data.resultCode === 0) {
                    unFollow(userID);
                }
            });
    };


    const followOnClick = (userID: number) => {
        axios
            .post(
                `https://social-network.samuraijs.com/api/1.0/follow/${userID}`,
                {},
                {withCredentials: true, headers: {"API-KEY": "2a8c69e4-572a-4487-8ff6-116dea09581f"}}
            )
            .then((res) => {
                if (res.data.resultCode === 0) {
                    follow(userID);
                }
            });
    };

    return (
        <div className={style.content}>
            {users.map((user) => (
                <div className={style.subscriber} key={user.id}>
                    <div className={style.photoStatus}>
                        <NavLink to={`/profile/${user.id}`}>
                            <img
                                className={style.photo}
                                src={
                                    user.photos.small === null
                                        ? "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                        : user.photos.small
                                }
                                alt="user"
                            />
                        </NavLink>

                        {user.followed ? (
                            <button
                                className={style.button}
                                onClick={() => unFollowOnClick(user.id)}
                            >
                                Unfollow
                            </button>
                        ) : (
                            <button
                                className={style.button}
                                onClick={() => followOnClick(user.id)}
                            >
                                Follow
                            </button>
                        )}
                    </div>
                    <div className={style.description}>
                        <div className={style.nameStatus}>
              <span>
                <strong>{user.name}</strong>
              </span>
                            <span>status: {user.status}</span>
                        </div>
                        <div className={style.location}>
                            <span>Country: {"location.country"}</span>
                            <span>City: {"location.city"}</span>
                        </div>
                    </div>
                </div>
            ))}
            <div className={style.pagination}>
                {page.map((page) => {
                    return (
                        <span
                            key={page}
                            className={currentPage === page ? style.active : style.page}
                            onClick={() => onClickPageChanged(page)}
                        >
              {page}
            </span>
                    );
                })}
            </div>
        </div>
    );
};

export default Users;
