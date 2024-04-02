import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profilePageReduser";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


// const MyPostsContainer = (props) => {
//
//     let state = props.store.getState()
//
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     }
//
//     let onPostChange = (text) => {
//         let action = updateNewPostTextActionCreator(text)
//         props.store.dispatch(action)
//     }
//     return (
//         <MyPosts updateNewPostText={onPostChange} addPost={addPost}
//                  posts = {state.profilePage.posts}
//                  newPostText = {state.profilePage.newPostText}
//         />)
// }

const mapStateToProps=(state)=>{
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => { dispatch(updateNewPostTextActionCreator(text)) },
        addPost: () => { dispatch(addPostActionCreator()) }
    }
}



const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer