import React from "react";
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user_png.webp'


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
                            <img src={u.photos.small != null ? (u.photos.small) : (userPhoto)}
                                 className={styles.userPhoto} alt={''}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>follow</button>
                                : <button onClick={() => {
                                   props.follow(u.id)
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

export default Users