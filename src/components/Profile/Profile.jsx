import React from "react";
import './Profile.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

return (
<main>
    <ProfileInfo/>
    <MyPosts posts={props.profilePage.posts}
             newPostText = {props.profilePage.newPostText}
             updateNewPostText = {props.updateNewPostText}
             addPost = {props.addPost}/>

</main>
)
}

export  default Profile