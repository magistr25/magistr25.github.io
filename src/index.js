import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let dialogsData = [
    {id:'1', name:'Mary'},
    {id:'2', name:'Kate'},
    {id:'3', name:'Alex'},
    {id:'4', name:'Roman'},
    {id:'5', name:'Denis'},
    {id:'6', name:'Olga'}

]

let messagesData =  [
    {id:'1', message:'Hi'},
    {id:'2', message:'How are you?'},
    {id:'3', message:'Hello!'},
    {id:'4', message:'Yo'},
    {id:'5', message:'Yo'},
    {id:'6', message:'Yo'}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

        <React.StrictMode>
            <App/>
        </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
