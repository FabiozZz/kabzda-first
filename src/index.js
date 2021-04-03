import React from 'react';
import App from './App';
import './index.css';
import {store} from "./redux/reduxStore";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
