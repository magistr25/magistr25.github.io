import {type} from "@testing-library/user-event/dist/type";
import {profilePageReduser} from "./profilePageReduser";
import {dialogsPageReduser} from "./dialogsPageReduser";
import {sidebarReduser} from "./sidebarReduser";



let store = {
    _state: {
        profilePage: {
            posts: [
                {id: '1', message: 'Hi! How are uou?', likesCount: 12},
                {id: '2', message: 'It`s my first post', likesCount: 11},
                {id: '3', message: 'Blabla', likesCount: 3},
                {id: '4', message: 'dada', likesCount: 11},

            ],

            newPostText: 'it-kamasutra',

        },
        dialogsPage: {
            dialogs: [
                {id: '1', name: 'Mary'},
                {id: '2', name: 'Kate'},
                {id: '3', name: 'Alex'},
                {id: '4', name: 'Roman'},
                {id: '5', name: 'Denis'},
                {id: '6', name: 'Olga'}

            ],
            messages: [
                {id: '1', message: 'Hi'},
                {id: '2', message: 'How are you?'},
                {id: '3', message: 'Hello!'},
                {id: '4', message: 'Yo'},
                {id: '5', message: 'Yo'},
                {id: '6', message: 'Yo'}
            ],

            newMessageBody: 'it-kamasutra',
        },
        sidebar: {
            friends: ['Andrew', 'Sasha', 'Sveta']
        }

    },
    _callSubscriber() {
        console.log('state is changed');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profilePageReduser(this._state.profilePage, action);
        this._state.dialogsPage = dialogsPageReduser(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReduser(this._state.sidebar, action);

        this._callSubscriber(this._state)


    }
}







export default store;
window.store = store;