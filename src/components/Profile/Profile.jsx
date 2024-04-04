import React from "react";
import './Profile.css';

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {

return (
<main>
    <ProfileInfo/>
    <MyPostsContainer />

</main>
)
}

export  default Profile