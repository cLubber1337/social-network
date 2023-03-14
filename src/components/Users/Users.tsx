import React from "react";
import style from "./Users.module.css";
import {UsersType} from "../../redux/usersPage-reducer";
import {NavLink} from "react-router-dom";
import {Pagination, Button, Avatar} from "@mui/material";
import {usersAPI} from "../../api/api";


type UsersPropsType = {
    users: UsersType[];
    follow: (userId: number) => void;
    unFollow: (userId: number) => void;
    pageSize: number;
    totalUserCount: number;
    currentPage: number;
    onClickPageChanged: (currentPage: number) => void;
    toggleFollowingInProgress: (isFetching: boolean, userID: number) => void;
    followingInProgress: number[]
};

const Users: React.FC<UsersPropsType> = ({
                                             users,
                                             unFollow,
                                             follow,
                                             currentPage,
                                             totalUserCount,
                                             pageSize,
                                             onClickPageChanged,
                                             toggleFollowingInProgress,
                                             followingInProgress
                                         }) => {
    let pageCount = Math.ceil(totalUserCount / pageSize);
    let page = [];
    for (let i = 1; i <= pageCount; i++) {
        page.push(i);
    }

    const unFollowOnClick = (userID: number) => {
        toggleFollowingInProgress(true, userID)
        usersAPI.unFollow(userID)
            .then((res) => {
                if (res.data.resultCode === 0) {
                    unFollow(userID);
                }
                toggleFollowingInProgress(false, userID)
            });
    };


    const followOnClick = (userID: number) => {
        toggleFollowingInProgress(true, userID)
        usersAPI.follow(userID)
            .then((res) => {
                if (res.data.resultCode === 0) {
                    follow(userID);
                }
                toggleFollowingInProgress(false, userID)
            });
    };

    return (
        <div className={style.content}>
            {users.map((user) => (
                <div className={style.subscriber} key={user.id}>
                    <div className={style.photoStatus}>
                        <NavLink to={`/profile/${user.id}`}>
                            <Avatar
                                sx={{width: 56, height: 56}}
                                src={
                                    user.photos.small === null
                                        ? "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                        : user.photos.small
                                }
                                alt="user"
                            />
                        </NavLink>

                        {user.followed ? (
                            <Button
                                color={"primary"}
                                className={style.button}
                                variant={"outlined"}
                                onClick={() => unFollowOnClick(user.id)}
                                disabled={followingInProgress.some(id => id === user.id)}
                            >
                                Unfollow
                            </Button>
                        ) : (
                            <Button
                                color={"primary"}
                                variant={"contained"}
                                className={style.button}
                                onClick={() => followOnClick(user.id)}
                                disabled={followingInProgress.some(id => id === user.id)}

                            >
                                Follow
                            </Button>
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
                <div className={style.pagination}>
                    <Pagination
                        count={pageCount}
                        color="primary"
                        page={currentPage}
                        onChange={(_, num) => onClickPageChanged(num)}
                    />
                </div>

            </div>
        </div>
    );
};

export default Users;
