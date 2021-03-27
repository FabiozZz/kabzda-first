import React from 'react';
import classes from './profileInfo.module.css';

export const ProfileInfo = () => {
    return(
        <div>
            <div>
                <img
                    src="https://external-content.duckduckgo.com/iu/Profile.jsx?u=http%3A%2F%2Fppss.kr%2Fwp-content%2Fuploads%2F2017%2F08%2FMC_SightWords-Some.jpg&f=1&nofb=1"
                    alt=""/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + dexcription
            </div>
        </div>
    )
};