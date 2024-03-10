import React from "react";
import './Profile.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = () => {
    let postsData =  [
        {id:'1', message:'Hi! How are uou?',likesCount:12},
        {id:'2', message:'It\`s my first post',likesCount:11},
        {id:'3', message:'Blabla',likesCount:3},
        {id:'4', message:'dada',likesCount:11},

    ]
return (
<main>
    <ProfileInfo/>
    <MyPosts posts={postsData}/>

</main>
)
}

export  default Profile