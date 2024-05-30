import React from "react";
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from"../../../assets/images/user_png.webp"
const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto}/>
                </div>

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>


        </div>
    )
}

export default ProfileInfo
