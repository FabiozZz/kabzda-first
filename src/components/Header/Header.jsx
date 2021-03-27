import React from 'react';
import classes from './header.module.css';
export const Header = ()=>{
    return (
        <header className={classes.header}>
            <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F03%2FKFC_logo_face.png&f=1&nofb=1"
                alt=""/>
        </header>
    );
}