import React, { lazy, Suspense } from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import HeaderContainer from "./components/Header/HeaderContainer";
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import MyUsersContainer from './components/Users/UsersContainer';
import Login from "./components/Login/Login";
import { connect, Provider } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import { compose } from "redux";
import { Preloader } from "./components/common/preloader/Preloader";
import { store } from "./redux/redux-store";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
// Ленивая загрузка компонентов
const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainer"));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Route path='/dialogs' render={() => <DialogsContainer />} />
                        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                    </Suspense>
                    <Route path='/users' render={() => <MyUsersContainer />} />
                    <Route path='/music' render={() => <Music />} />
                    <Route path='/news' render={() => <News />} />
                    <Route path='/settings' render={() => <Settings />} />
                    <Route path='/login' render={() => <Login />} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp })
)(App);

let SwitchApp = (props) => {
    return (
        <BrowserRouter>
            <React.StrictMode>
                <Provider store={store}>
                    <AppContainer />
                </Provider>
            </React.StrictMode>
        </BrowserRouter>
    )
}

export default SwitchApp;
