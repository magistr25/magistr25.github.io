import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}><img
            src='https://images.ctfassets.net/zrqoyh8r449h/7taM7P2vHzWdGUE5VIm4ou/ba9ff9d11fe33dac9a170cf7d8e2468c/Swish_Logo_Primary_Dark-BG_P3.png?w=600'
            alt=''/>
            <div className={s.loginBlock}>
                { props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>
            }
            </div>

        </header>
    )

}
export default Header