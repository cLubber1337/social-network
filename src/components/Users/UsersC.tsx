import React from 'react';
import style from "./Users.module.css";
import {UsersType} from "../../redux/usersPage-reducer";
import axios from "axios";

type UsersPropsType = {
    users: UsersType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UsersType) => void
}


class UsersC extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props)
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(res => (this.props.setUsers(res.data.items)))
    }

    render() {
        return (
            <div className={style.content}>
                {this.props.users.map((m) =>
                    <div className={style.subscriber} key={m.id}>
                        <div className={style.photoStatus}>
                            <img className={style.photo}
                                 src="https://cdn.pixabay.com/photo/2015/03/03/20/42/man-657869_960_720.jpg"
                                 alt="user"/>
                            <button className={style.button}
                                    onClick={m.followed ? () => this.props.unFollow(m.id) : () => this.props.follow(m.id)}>
                                {m.followed ? "Unfollow" : "Follow"}
                            </button>
                        </div>
                        <div className={style.description}>
                            <div className={style.nameStatus}>
                        <span>
                            <strong>{m.name}</strong>
                        </span>
                                <span>
                            status: {m.status}
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
            </div>
        );
    }
}

export default UsersC