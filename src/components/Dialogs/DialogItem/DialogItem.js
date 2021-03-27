import React from 'react';
import classes from './../dialogs.module.css';
import {NavLink} from "react-router-dom";


export const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div key={props.id} className={`${classes.dialog}`}>
            <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    )
};