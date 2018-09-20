import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Message from './Message';

ReactDOM.render(
<Message />, // added a props to the Message component
document.getElementById('root')
);

registerServiceWorker();
