import {combineReducers, legacy_createStore as createStore } from 'redux';
import {profilePageReduser} from './profilePageReduser';
import {dialogsPageReduser} from './dialogsPageReduser';
import {sidebarReduser} from './sidebarReducer';
import {usersPageReducer} from './usersPageReducer';
import {authReducer} from './authReducer';


let reducers = combineReducers({
    profilePage: profilePageReduser,
    dialogsPage: dialogsPageReduser,
    sidebar: sidebarReduser,
    usersPage: usersPageReducer,
    auth: authReducer,
})
export let store = createStore(reducers);

window.store = store;
