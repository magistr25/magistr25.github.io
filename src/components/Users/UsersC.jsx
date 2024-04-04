import React from "react";
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/user_png.webp'


class UsersC extends React.Component {

    getUsers = () => {

        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {

                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div>
                <button onClick={this.getUsers}>getUsers</button>
                {
                    this.props.users.map(u => <div key={u.id}>
                        <div>
                            <div>
                                <img src={u.photos.small != null ? (u.photos.small) : (userPhoto)}
                                     className={styles.userPhoto} alt={''}/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>follow</button>
                                    : <button onClick={() => {
                                        this.props.follow(u.id)
                                    }}>unfollow</button>
                                }
                            </div>
                        </div>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>

                        </div>
                        <div>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </div>

                    </div>)
                }
            </div>

        )
    }


}

export default UsersC