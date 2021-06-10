import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './redux/store';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
ReactDOM.render(
     <Provider store = { store } >
    <App />
    </Provider>,
    document.getElementById('root')
);