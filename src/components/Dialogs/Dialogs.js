import React from 'react';
import classes from './dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={`${classes.dialog}`}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props)=>{
    return(
        <div className={classes.message}>
            {props.message}
        </div>

    )
}

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                Names
                <DialogItem name={'name 1'} id={1}/>
                <DialogItem name={'name 2'} id={2}/>
                <DialogItem name={'name 3'} id={3}/>
                <DialogItem name={'name 4'} id={4}/>
                <DialogItem name={'name 5'} id={5}/>
            </div>
            <div className={classes.messages}>
                Messages
                <Message message={'some text'}/>
                <Message message={'Hi'}/>
                <Message message={'You'}/>
                <Message message={'Some sOme soMe somEs'}/>
            </div>
        </div>
    );
};