import React from 'react';
import classes from './dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';

export const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map((el,index) => <DialogItem key={index} name={el.name} id={el.id}/>)
    let messagesElements = props.dialogsPage.messages.map((el,index) => <Message key={index} message={el.message} id={el.id}/>)
    let newMessageBody = props.dialogsPage.newMessageBody;
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.onNewMessageChange(body);
    };

    let onSendMessageClick = () => {
        props.onSendMessageClick();
    };
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                Names
                {dialogsElements}
                {/*<DialogItem names={dialogsData}/>*/}
            </div>
            <div className={classes.messages}>
                Messages
                <div> {messagesElements} </div>
                <div>
                    <div>
                        <textarea onChange={onNewMessageChange} value={newMessageBody} placeholder={'enter your message'}/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
                {/*<Message messages={messagesData}/>*/}
            </div>
        </div>
    );
};