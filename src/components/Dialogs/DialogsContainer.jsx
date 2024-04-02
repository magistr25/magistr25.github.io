// import React from "react";
// import s from "./Dialogs.module.css"
// import DialogItem from './DialogItem/DialogItem'
// import Message from "./Message/Message";
// import {type} from "@testing-library/user-event/dist/type";

import {
    sendMessageActionCreator, updateNewMessageBodyActionCreator,


} from "../../redux/dialogsPageReduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



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
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyActionCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer