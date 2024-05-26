import {applyMiddleware, combineReducers, createStore} from 'redux';
import {profilePageReduser} from './profilePageReduser';
import {dialogsPageReduser} from './dialogsPageReduser';
import {sidebarReduser} from './sidebarReducer';
import {usersPageReducer} from './usersPageReducer';
import {authReducer} from './authReducer';
import {thunk as thunkMiddleware} from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import appReducer from "./app-reducer";

let reducers = combineReducers(
    {
                profilePage: profilePageReduser,
                dialogsPage: dialogsPageReduser,
                sidebar: sidebarReduser,
                usersPage: usersPageReducer,
                auth: authReducer,
                form: formReducer,
                app: appReducer,
    }
)
export let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
