import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import config from './app-config';

// Set title
document.title = config.title ? config.title : 'My Blog';
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
