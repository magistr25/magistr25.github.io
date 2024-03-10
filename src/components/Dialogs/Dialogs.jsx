import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";





const Dialogs = (props) => {

    let dialogsData = [
        {id:'1', name:'Mary'},
        {id:'2', name:'Kate'},
        {id:'3', name:'Alex'},
        {id:'4', name:'Roman'},
        {id:'5', name:'Denis'},
        {id:'6', name:'Olga'}

    ]

    let messagesData =  [
        {id:'1', message:'Hi'},
        {id:'2', message:'How are you?'},
        {id:'3', message:'Hello!'},
        {id:'4', message:'Yo'},
        {id:'5', message:'Yo'},
        {id:'6', message:'Yo'}
]
    let dialogsElements = dialogsData.map(d=><DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messagesData.map(m=><Message message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>


            < div className={s.messages}>

                {messagesElements}
            </div>

        </div>

    )
}
export default Dialogs