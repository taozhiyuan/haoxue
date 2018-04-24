import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
// import store from './request/redux.js';
// import store from './request/mobx.js';

ReactDOM.render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    ), 
    document.getElementById('root')
);
registerServiceWorker();