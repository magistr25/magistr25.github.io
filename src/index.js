import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './redux/store';
import {Provider} from "react-redux";



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>
    </BrowserRouter>
);

// let rerenderEntireTree = ()=> {
//     root.render(
//         <React.StrictMode>
//             <Provider store={store}>
//             <App state = {store.getState()}/>
//             </Provider>
//         </React.StrictMode>
//
//     );
// }


// rerenderEntireTree(store.getState());
//
// store.subscribe(()=>{
//     let state = store.getState()
//     rerenderEntireTree(state)
// });


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
