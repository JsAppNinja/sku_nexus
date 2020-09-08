import '@babel/polyfill';

import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from 'utils/history';

import App from 'containers/App';
import configureStore from './configureStore';

const store = configureStore();

export default () => (
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
);
