import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";



const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar friends = {props.state.sidebar.friends}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*' element = {<DialogsContainer />}/>
                        <Route path='/profile' element = {<Profile/>}/>
                        <Route path='/music' element = {<Music/>}/>
                        <Route path='/news' element = {<News/>}/>
                        <Route path='/settings' element = {<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )

}
export default App

