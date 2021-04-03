import React from 'react';
import classes from './profileInfo.module.css';
import {Preloader} from "../../common/preloader/Preloader";

export const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>;
    }
    let contactsList = [];
    let contacts = props.profile.contacts;
    for (let key in contacts) {
        if (contacts[key]) {
            let temp = <li><a href={contacts[key]} target={'_blank'}>{key}</a></li>
            contactsList.push(temp);
        }

    }

    return(
        <div>
            <div className={classes.imgWrapper}>
                <img
                    src="https://tgraph.io/file/2f1e5f9d3664defbb8733.jpg"
                    alt=""/>
            </div>
            <div className={classes.descriptionBlock}>
                <div>
                    <h3>{props.profile.fullName}</h3>
                    <img src={props.profile.photos.large} alt={props.profile.fullName}/>
                </div>
                <div style={{width:'100%'}}>
                    <p>{props.profile.aboutMe}</p>
                    <p style={{float:'right'}}>
                        <ul>
                            {contactsList}
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
};