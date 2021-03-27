import React from 'react';
import classes from './profileInfo.module.css';

export const ProfileInfo = () => {
    return(
        <div>
            <div className={classes.imgWrapper}>
                <img
                    src="https://tgraph.io/file/2f1e5f9d3664defbb8733.jpg"
                    alt=""/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + dexcription
            </div>
        </div>
    )
};