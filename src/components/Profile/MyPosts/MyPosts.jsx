import React from 'react';
import classes from './myPosts.module.css'
import {Post} from "./Post/Post";

export class MyPosts extends React.Component {
    onAddPost = () => {
        this.props.addPosts();
    }
    onPostChange = (e)=>{
        let text = e.target.value;
        this.props.updateNewPostText(text);
    };

    render() {
        let postsElements = this.props.posts.map((post,index)=> <Post key={index} message={post.message} likesCount={post.likesCount}/>)

        return (
            <div className={classes.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea onChange={this.onPostChange} cols="30" rows="3" value={this.props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={this.onAddPost}>Add Post</button>
                    </div>
                </div>
                <div className={classes.posts}>
                    {postsElements}
                </div>
            </div>
        );
    }
}