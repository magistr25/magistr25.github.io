import React from "react";
import './Profile.css';

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    if (!props.profile) {
        return <div>Loading...</div>;
    }
return (
<main>
    <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
    <MyPostsContainer />

</main>
)
}

export  default Profile
