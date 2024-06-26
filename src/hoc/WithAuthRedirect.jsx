import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
})

export const WithAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>;
            return <Component {...this.props} />
        }
    }

    let СonnectedAuthRedirectComponent=connect(mapStateToPropsForRedirect)(RedirectComponent)

    return СonnectedAuthRedirectComponent
}

