import {combineReducers, legacy_createStore as createStore } from "redux";
import {profilePageReduser} from "./profilePageReduser";
import {dialogsPageReduser} from "./dialogsPageReduser";
import {sidebarReduser} from "./sidebarReduser";



let reducers = combineReducers({
    profilePage: profilePageReduser,
    dialogsPage: dialogsPageReduser,
    sidebar: sidebarReduser
})
export let store = createStore(reducers);
