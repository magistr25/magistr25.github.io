import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profilePageReduser";
import {withRouter} from "react-router-dom";


export class ProfileContainer extends React.Component {
    componentDidMount() {
        debugger
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/3`)


            .then(response => {
                if (response.status === 200) {
                    this.props.setUserProfile(response.data)
                }
            })
    }


    render() {
        return (
            <main>
                <Profile {...this.props} profile={this.props.profile}/>

            </main>
        )
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile

})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);