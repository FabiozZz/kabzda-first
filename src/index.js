import React from 'react';
import App from './App';
import './index.css';
import {store} from "./redux/state";
import ReactDOM from 'react-dom';



let rerenderEntiereThree = (state)=>{


    ReactDOM.render(
        <React.StrictMode>
            <App
                updateNewPostText={store.updateNewPostText.bind(store)}
                addPosts={store.addPosts.bind(store)}
                state={state}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntiereThree(store.getState());
store.subscribes(rerenderEntiereThree);