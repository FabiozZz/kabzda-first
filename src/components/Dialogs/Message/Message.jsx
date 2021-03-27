import React from 'react';
import classes from './../dialogs.module.css';

export const Message = (props) => {
    return (
        <div key={props.id} className={classes.message}>
            {props.message}
        </div>
    )
};