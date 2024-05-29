import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user_png.webp';
import { NavLink } from "react-router-dom";
import {Paginator} from "../common/Paginator/Paginator";
import User from "./User";


const Users = (props) => {

    return (
        <div>
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                       totalUsersCount={props.totalUsersCount} pageSize = {props.pageSize}/>
            <div>
                {props.users.map(u => <User user={u}
                                            key={u.id}
                                            followingInProgress={props.followingInProgress}
                                            unfollow={props.unfollow}
                                            follow={props.follow}
                    />

                )}
            </div>
        </div>

    );
}

export default Users;
