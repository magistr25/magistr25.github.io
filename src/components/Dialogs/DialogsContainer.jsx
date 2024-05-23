// import React from "react";
// import s from "./Dialogs.module.css"
// import DialogItem from './DialogItem/DialogItem'
// import Message from "./Message/Message";
// import {type} from "@testing-library/user-event/dist/type";

import React from "react";
import {sendMessageActionCreator} from "../../redux/dialogsPageReduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {ProfileContainer} from "../Profile/ProfileContainer";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


// const DialogsContainer = (props) => {
//
//     let state = props.store.getState().dialogsPage
//
//     let onSendMessageClick = () => {
//         props.store.dispatch(sendMessageActionCreator());
//
//     }
//
//     let onNewMessageChange = (body) => {
//         props.store.dispatch(updateNewMessageBodyActionCreator(body));
//
//     }
//
//     return (
//         <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
//                  dialogsPage={props.dialogsPage}/>
//     )
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,

    }

};

let mapDispatchToProps = (dispatch) => {
    return {
       sendMessage: (newMessageBody) => {
            dispatch(sendMessageActionCreator(newMessageBody))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)




