import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

const getConfirmation = (message, callback) => {
    const allowTransition = window.confirm(message)
    callback(allowTransition)
}

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ), 
    document.getElementById('root')
);
registerServiceWorker();
