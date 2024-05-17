import React from 'react';
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user_png.webp'
import {NavLink} from "react-router-dom";
import axios from "axios";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let slicedPages;
    let curPage = props.currentPage;
    if (curPage - 3 < 0) {
        slicedPages = pages.slice(0, 5);
    } else {
        slicedPages = pages.slice(curPage - 3, curPage + 2);
    }

    return (
        <div>
            <div className={styles.pages}>

                {slicedPages.map(p => (
                    <span
                        className={props.currentPage === p && styles.selectedPage}
                        onClick={() => props.onPageChanged(p)}
                    > {p} </span>
                ))}

            </div>

            {
                props.users.map(u => <div key={u.id}>
                    <div>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? (u.photos.small) : (userPhoto)}
                                     className={styles.userPhoto} alt={''}/>
                            </NavLink>
                        </div>

                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress} onClick={() => {
                                    props.toggleFollowingInProgress(true)
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': '5e307505-c0ee-404d-a614-497d3f76d2ae'
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                            props.toggleFollowingInProgress(true)
                                        });

                                }}>unfollow</button>
                                : <button disabled={props.followingInProgress} onClick={() => {
                                    props.toggleFollowingInProgress(true)
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': '5e307505-c0ee-404d-a614-497d3f76d2ae'
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                            props.toggleFollowingInProgress(true)
                                        })


                                }}>follow</button>
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

export default Users
