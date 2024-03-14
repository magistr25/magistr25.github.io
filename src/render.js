import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './redux/state';

import {addPost, updateNewPostText, addMessage, updateNewPostMessage} from "./redux/state";


const root = ReactDOM.createRoot(document.getElementById('root'));

export let renderEntireTree = (state)=> {
    root.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 addMessage = {addMessage}
                 updateNewPostMessage = {updateNewPostMessage}/>
        </React.StrictMode>
    );
}


