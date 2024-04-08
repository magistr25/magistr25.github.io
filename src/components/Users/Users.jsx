import React from "react";
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/user_png.webp'



class Users extends React.Component {

        componentDidMount() {

            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)


                .then(response => {

                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                })
        }

        onPageChanged = (pageNumber) => {
            this.props.setCurrentPage(pageNumber)
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)


                .then(response => {

                    this.props.setUsers(response.data.items)
                })
        }


    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        let slicedPages;
        let curPage = this.props.currentPage;
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
                            className={this.props.currentPage === p && styles.selectedPage}
                            onClick={() => this.onPageChanged(p)}
                        > {p} </span>
                    ))}

                </div>

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

export default Users