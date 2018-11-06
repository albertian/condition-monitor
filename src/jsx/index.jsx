import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import '../css/main.css';

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index.js";

import apiMiddleWare from './middleware/api.js';
import localStorageMiddleWare from './middleware/local-storage.js';
const store = createStore(rootReducer, {}, applyMiddleware(localStorageMiddleWare, apiMiddleWare));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('content')
);