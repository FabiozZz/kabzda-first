import React from 'react';
import classes from './post.module.css'
export const Post = (props)=>{
    console.log(props);
    return (
        <div className={classes.item}>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.1oQNnkE8Wfqz2chDUY_jUQHaGy%26pid%3DApi&f=1" alt=""/>
            {props.message}
            <div>
                <span>Like {props.likesCount}</span>
            </div>
        </div>
    );
}