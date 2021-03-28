import React from 'react';
import classes from './myPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = (props)=>{
    let newPostElement = React.createRef();
    let postsElements = props.posts.map((post,index)=> <Post key={index} message={post.message} likesCount={post.likesCount}/>)
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPosts(text);
    };
    let onPostChange = ()=>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} cols="30" rows="3" value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}