import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/formsControls/formsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import styles from "./../common/formsControls/formsControls.module.css";


const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field placeholder={'Email'} name={'email'}  validate={[required]} component={Input} />
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'} type={'password'} validate={[required]} component={Input} />
                </div>
                <div>
                    <Field type={"checkbox"} name={'rememberMe'} validate={[required]} component={Input} /> remember me
                </div>

                {captchaUrl && <img src={captchaUrl} alt="captcha" />}
                {captchaUrl && createField('Symbols from image', 'captcha', [required], Input,{})}

                { error && <div className={styles.formSummaryError}>
                    {error}
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
        props.loginThunkCreator(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth
    };
}
export default connect(mapStateToProps, { loginThunkCreator })(Login);

