import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";
import {type} from "@testing-library/user-event/dist/type";
import {
     sendMessageActionCreator, updateNewMessageBodyActionCreator,


} from "../../redux/dialogsPageReduser";


const Dialogs = (props) => {


    let dialogsElements = props.dialogsPage.dialogs.map(d=><DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m=><Message message={m.message} id={m.id}/>)



    let onSendMessageClick = ()=>{
        props.dispatch(sendMessageActionCreator());

    }

    let onNewMessageChange=(e)=>{
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyActionCreator(body));

    }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>


            < div className={s.messages}>

                {messagesElements}
            </div>

            <div>
                <div>
                    <textarea value={props.dialogsPage.newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message' ></textarea>

                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>

            </div>

        </div>

    )
}
export default Dialogs