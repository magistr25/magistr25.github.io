import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Post from "../Profile/MyPosts/Post/Post";

const Navbar = () => {

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile'
                         className={({isActive}) => isActive ? s.active : undefined}
                >Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className={({isActive}) => isActive ? s.active : undefined}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' className={({isActive}) => isActive ? s.active : undefined}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' className={({isActive}) => isActive ? s.active : undefined}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' className={({isActive}) => isActive ? s.active : undefined}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' className={({isActive}) => isActive ? s.active : undefined}>Settings</NavLink>
            </div>
            {/*<div className={s.friends}>*/}
            {/*    <h3>Friends</h3>*/}
            {/*    <div>*/}


            {/*        {friendsElements}*/}

            {/*    </div>*/}

            {/*</div>*/}

        </nav>

    )
}
export default Navbar