import React, {useState} from 'react';
import style from ".././Users/Users.module.css";
import {UsersType} from "../../redux/usersPage-reducer";
import axios from "axios";

type UsersPropsType = {
    users: UsersType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UsersType) => void
}


export const Users: React.FC<UsersPropsType> = ({users, follow, unFollow, setUsers}) => {


    const [user, setUser] = useState<any>({})

    React.useEffect(() => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(res => (setUser(res.data.items)))
    }, [])


    return (
        <div className={style.content}>

            {users.map(m => <div className={style.subscriber} key={m.id}>
                <div className={style.photoStatus}>
                    <img className={style.photo}
                         src="https://cdn.pixabay.com/photo/2015/03/03/20/42/man-657869_960_720.jpg" alt="user"/>
                    <button className={style.button} onClick={m.followed ? () => unFollow(m.id) : () => follow(m.id)}>
                        {m.followed ? "Unfollow" : "Follow"}
                    </button>
                </div>
                <div className={style.description}>
                    <div className={style.nameStatus}>
                        <span>
                            <strong>{m.fullName}</strong>
                        </span>
                        <span>
                            status: {m.status}
                        </span>
                    </div>
                    <div className={style.location}>
                        <span>
                            Country: {m.location.country}
                        </span>
                        <span>
                            City: {m.location.city}
                        </span>
                    </div>
                </div>
            </div>)}
        </div>
    );
};

