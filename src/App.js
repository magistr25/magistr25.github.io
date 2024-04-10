import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {Route, Routes} from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import {MyUsersContainer} from './components/Users/UsersContainer';
import MyProfileContainer from "./components/Profile/ProfileContainer";





const App = () => {

    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*' element = {<DialogsContainer />}/>
                        <Route path='/profile/*' element = {<MyProfileContainer />}/>

                        <Route path='/music' element = {<Music/>}/>
                        <Route path='/news' element = {<News/>}/>

                        <Route path='/users' element = {<MyUsersContainer/>}/>
                        <Route path='/settings' element = {<Settings/>}/>
                    </Routes>
                </div>
            </div>

    )

}
export default App

