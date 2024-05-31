import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "swith-network/auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "swith-network/auth/GET_CAPTCHA_URL_SUCCESS"

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null, //if null then captcha is not required
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            };
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {id, email, login, isAuth},
});

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl},
});



// export const getAuthUserData = () => (dispatch) => {
//     authAPI.me().then((response) => {
//         if (response.data.resultCode === 0) {
//             let {id, email, login} = response.data.data;
//             dispatch(setAuthUserData(id, email, login, true));
//         }
//     });
// };

export const getAuthUserData = () => async (dispatch) => {
    let response = await  authAPI.me()
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }

};

export const loginThunkCreator = (email, password, rememberMe, captcha) => (dispatch) => {
    authAPI.login(email, password, rememberMe, captcha).then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
         if (response.data.resultCode === 10) {
             dispatch(getCaptchaUrl());
            }
            let message = response.data.messages.length>0
                ? response.data.messages[0]
                : 'Some error'
            dispatch(stopSubmit('login', {_error: message}))
        }
    });
};

export const outLoginThunkCreator = () => (dispatch) => {
    authAPI.logout().then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
};

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
};

