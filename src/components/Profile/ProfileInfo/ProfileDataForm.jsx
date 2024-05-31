import React from "react";
import {createField, Input, TextArea} from "../../common/formsControls/formsControls";
import {reduxForm} from "redux-form";



const ProfileDataForm = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>save</button>
        </div>
        <div>
            <b>Full Name</b>: {createField("Full Name", "FullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>: {createField("", "LookingforAjob", [], Input, {type: "checkbox"})}
        </div>
        <div>
            <b>My professional skills</b>: {createField("My professional skills", "LookingForAJobDescription", [], TextArea, {type: "checkbox"})}
        </div>
        <div>
            <b>About me</b>: {createField("About me", "AboutMe", [], TextArea, {type: "checkbox"})}
        </div>

    </form>
}
const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm;
