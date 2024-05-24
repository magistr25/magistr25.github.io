import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from './components/Header/Header';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {Route} from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import MyUsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


const App = () => {
    return (
        <div className='app-wrapper'>

            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>

                    <Route path='/dialogs' render={ () => <DialogsContainer /> }/>
                    <Route path='/profile/:userId?' render={ () => <ProfileContainer /> }/>
                    <Route path='/users' render={ () => <MyUsersContainer /> }/>                    <Route path='/music' element={<Music/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/login' render={() => <Login/>}/>

            </div>
        </div>
    );
}

export default App

