import React from 'react';
// import classes from './profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
export const Profile = (props)=>{
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}/>
        </div>
    );
}