import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/formsControls/formsControls";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Login'} name={'Login'} validate={[required]} component={Input} />
                </div>
                <div>
                    <Field placeholder={'Password'} name={'Password'} validate={[required]} component={Input} />
                </div>
                <div>
                    <Field type={"checkbox"} name={'rememberMe'} validate={[required]} component={Input} /> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


export const Login = (props) => {
    const onSubmit = (formData)=>{
        console.log(formData);
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>

    )
}
