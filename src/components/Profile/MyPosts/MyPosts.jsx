import React from 'react';
import classes from './myPosts.module.css'
import {Post} from "./Post/Post";
export const MyPosts = ()=>{
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="3"></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message={'How are you'} likesCount={15}/>
                <Post message={'It\'s my new project on React'} likesCount={20}/>
            </div>
        </div>
    );
}