import React from 'react';
import {addPostActionCreat, updateNewPostActionCreator} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addPosts:()=> {
            dispatch(addPostActionCreat())
        },
        updateNewPostText:(text)=> {
            dispatch(updateNewPostActionCreator(text));
        }
    };
};

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);