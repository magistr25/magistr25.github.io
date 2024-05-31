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
    <ProfileInfo savePhoto={props.savePhoto}
                 isOwner={props.isOwner}
                 profile={props.profile}
                 status={props.status}
                 updateStatus={props.updateStatus}
                 saveProfile={props.saveProfile}
    />
    <MyPostsContainer />

</main>
)
}

export  default Profile
