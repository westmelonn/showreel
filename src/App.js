import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import { bgDatastore } from "./store"
import App from './App.jsx';

ReactDOM.render(
    <Provider store={bgDatastore}>
        <App />
    </Provider>
     , document.getElementById('app'));