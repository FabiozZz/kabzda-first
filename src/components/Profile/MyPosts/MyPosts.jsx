import React from 'react';
import classes from './myPosts.module.css'
import {Post} from "./Post/Post";
export const MyPosts = (props)=>{

    let postsElements = props.posts.map((post,index)=> <Post key={index} message={post.message} likesCount={post.likesCount}/>)

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
                {postsElements}
            </div>
        </div>
    );
}