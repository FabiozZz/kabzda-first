import React from 'react';
import classes from './dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
        return (
            <div key={props.id} className={`${classes.dialog}`}>
                <NavLink to={`/dialogs/${props.id}`} activeClassName={classes.active}>{props.name}</NavLink>
            </div>
        )
    // return (
    // );
};

const Message = (props)=>{
        return (
            <div key={props.id} className={classes.message}>
                {props.message}
            </div>
        )
    // return(
    //
    // )
}

export const Dialogs = () => {
    let dialogsData = [
        {id:1, name:'Ульяна'},
        {id:2, name:'Владимир'},
        {id:3, name:'Владлен'},
        {id:4, name:'Василий'},
        {id:5, name:'Антоха'},
        {id:6, name:'Серж'},
        {id:7, name:'Пантелеймон'},
        {id:8, name:'Филл'},
    ];
    let messagesData = [
        {id:1, message:'Haw rot'},
        {id:2, message:'dkf я пьян'},
        {id:3, message:'sook'},
        {id:4, message:'asdjjjj '},
        {id:5, message:'Some text'},
        {id:6, message:'Пишите по русски'},
        {id:7, message:'Пантелеймон ау'},
        {id:8, message:'слышишь, я здесь'},
    ];

    let dialogsElements = dialogsData.map((el,index) => <DialogItem key={index} name={el.name} id={el.id}/>)
    let messagesElements = messagesData.map((el,index) => <Message key={index} message={el.message} id={el.id}/>)

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