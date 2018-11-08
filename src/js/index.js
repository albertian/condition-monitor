import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

import apiMiddleWare from './middleware/api';
import localStorageMiddleWare from './middleware/local-storage';
const store = createStore(rootReducer, {}, applyMiddleware(localStorageMiddleWare, apiMiddleWare));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('content')
);