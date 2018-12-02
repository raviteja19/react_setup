import React from 'react';
import ReactDOM from 'react-dom';
import App from './jsx/App.jsx';
import {BrowserRouter as Router, browserHistory} from 'react-router-dom';
import routes from './routes';
import configureStore from './store/configurestore';
import { syncHistoryWithStore } from 'react-router-redux';
import {Provider} from 'react-redux';
const store = configureStore();


ReactDOM.render(
    <Provider store={store}>
    <Router>{routes}</Router>
    </Provider>,document.getElementById('main'));
