import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Todo from './todo'
import InProgess from './inProgress'
import Done from './done'


ReactDOM.render(<App />, document.getElementById('header'));
ReactDOM.render(<Todo />, document.getElementById('to-do'));
ReactDOM.render(<InProgess />, document.getElementById('in-progress'))
ReactDOM.render(<Done />, document.getElementById("done"))
registerServiceWorker();
