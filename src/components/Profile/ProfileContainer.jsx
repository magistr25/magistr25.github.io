import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profilePageReduser";
import {withRouter} from "react-router-dom";


export class ProfileContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userId;
        if (!userID) {
            userID = 2;
        }
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)


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

let WithUrlDataContainerComponent = withRouter(ProfileContainer);


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile

})

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);