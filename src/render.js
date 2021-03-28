import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPosts, updateNewPostText} from "./redux/state";

export let rerenderEntiereThree = (state)=>{


ReactDOM.render(
    <React.StrictMode>
        <App updateNewPostText={updateNewPostText} addPosts={addPosts} state={state}/>
    </React.StrictMode>,
    document.getElementById('root')
);
}