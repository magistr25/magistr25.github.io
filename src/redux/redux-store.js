import {combineReducers, legacy_createStore as createStore } from "redux";
import {profilePageReduser} from "./profilePageReduser";
import {dialogsPageReduser} from "./dialogsPageReduser";
import {sidebarReduser} from "./sidebarReduser";
import {usersPageReduser} from "./usersPageReduser";



let reducers = combineReducers({
    profilePage: profilePageReduser,
    dialogsPage: dialogsPageReduser,
    sidebar: sidebarReduser,
    usersPage: usersPageReduser
})
export let store = createStore(reducers);
