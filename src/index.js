import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import stores from './global/mobx.js';

ReactDOM.render((
    <BrowserRouter>
        <Provider { ...stores }>
            <App />
        </Provider>
    </BrowserRouter>
    ), 
    document.getElementById('root')
);
registerServiceWorker();