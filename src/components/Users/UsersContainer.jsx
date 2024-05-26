import React from 'react';
import Users from './Users';
import {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingInProgress,
    requestUsers,
} from '../../redux/usersPageReducer';
import {connect} from 'react-redux';
import {Preloader} from "../common/preloader/Preloader";
import {compose} from "redux";
import {

    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/users-selectors";




class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        // this.props.toggleIsFetching(true)
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items)
        //     this.props.setTotalUsersCount(data.totalCount)
        // })
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);

    }


    render() {

        return (
            <div>
                {this.props.isFetching ? <Preloader/> : null}
                <Users onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       currentPage={this.props.currentPage}
                       pageSize={this.props.pageSize}
                       totalUsersCount={this.props.totalUsersCount}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       followingInProgress={this.props.followingInProgress}
                />

            </div>)
    }

}

// _________

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),


    }



// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         },
//     }

}


// export const MyUsersContainer = connect(mapStateToProps, {
//     follow,
//     unfollow,
//     setCurrentPage,
//     toggleFollowingInProgress,
//     getUsers
// })(UsersContainer)
//
// // вместо mapDispatchToProps передаём объект
// // {   follow: follow,
// //     unfollow: unfollow,
// //     setCurrentPage: setCurrentPage,
// //     toggleFollowingInProgress: toggleFollowingInProgress,
// //     getUsers: getUsers
// // }

export default compose(

    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingInProgress,
        getUsers: requestUsers
    }))(UsersContainer)
