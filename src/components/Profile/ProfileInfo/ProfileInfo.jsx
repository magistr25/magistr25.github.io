import React, {useState} from "react";
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user_png.webp";
import {getFormValues, reduxForm} from "redux-form";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile, ...props}) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const mainPhotoSelectedOn = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }
    const onSubmit = (formData) => {
        saveProfile(formData)
        setEditMode(false)

    }

    return (
        <div>

            <div className={s.descriptionBlock}>
                <div>
                    <img src={profile.photos.large || userPhoto} className={s.mainPhoto} alt="Profile"/>
                    {isOwner && (
                        <div>
                            <input
                                type="file"
                                id="file-input"
                                className={s.fileInput}
                                onChange={mainPhotoSelectedOn}
                            />
                        </div>
                    )}
                </div>

                { editMode
                    ? <ProfileDataForm  initialValues={profile} profile={profile} onSubmit={onSubmit} />
                    :
                    <ProfileData profile={profile} goToEditMode={()=> {setEditMode(true)}} isOwner={isOwner}/>}

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

const ProfileData = ({isOwner, profile, goToEditMode})=> {
    return <div>
        {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob && (
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
        )}
        <div>
            <b>Full Name</b>: {profile.fullName}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts)
            .map(key => {
                return <Contact contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
        </div>
    </div>

}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;
