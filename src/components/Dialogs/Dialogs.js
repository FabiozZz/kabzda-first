import React from 'react';
import classes from './dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';

export const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map((el,index) => <DialogItem key={index} name={el.name} id={el.id}/>)
    let messagesElements = props.state.messages.map((el,index) => <Message key={index} message={el.message} id={el.id}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                Names
                {dialogsElements}
                {/*<DialogItem names={dialogsData}/>*/}
            </div>
            <div className={classes.messages}>
                Messages
                {messagesElements}
                {/*<Message messages={messagesData}/>*/}
            </div>
        </div>
    );
};