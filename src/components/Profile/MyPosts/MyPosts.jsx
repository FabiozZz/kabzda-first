import React from 'react';
import classes from './myPosts.module.css'
import {Post} from "./Post/Post";
export const MyPosts = ()=>{
    let postsData = [
        {id:1, message:'Это пост', likesCount:10},
        {id:2, message:'Мой новый пост', likesCount:23},
        {id:3, message:'create react app', likesCount:0},
        {id:4, message:'Все верно ', likesCount:1},
        {id:5, message:'Верной дорогой идете товарищи', likesCount:233},
        {id:6, message:'Пишите по русски', likesCount:9},
        {id:7, message:'Что то не так работает', likesCount:15},
        {id:8, message:'Здесь был василий и пил водку с пивом', likesCount:26},
    ];
    let postsElements = postsData.map((post,index)=> <Post key={index} message={post.message} likesCount={post.likesCount}/>)

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