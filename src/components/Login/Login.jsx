import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/formsControls/formsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import styles from "./../common/formsControls/formsControls.module.css";


const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Email'} name={'email'}  validate={[required]} component={Input} />
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'} type={'password'} validate={[required]} component={Input} />
                </div>
                <div>
                    <Field type={"checkbox"} name={'rememberMe'} validate={[required]} component={Input} /> remember me
                </div>

                { props.error && <div className={styles.formSummaryError}>
                    {props.error}
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData)=>{
        props.loginThunkCreator(formData.email, formData.password, formData.rememberMe);
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    };
}
export default connect(mapStateToProps, { loginThunkCreator })(Login);

