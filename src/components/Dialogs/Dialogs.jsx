import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import AddMessageFormRedux from "./Message/AddMessageForm";


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id}/>)


    let addNewMessage = (values) => {
        //alert(values.newMessageBody);
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>;


    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>


            < div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>

        </div>

    )
}

export default Dialogs
