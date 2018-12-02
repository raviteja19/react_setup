import React from 'react';
import {Route,Switch} from 'react-router-dom';
import App from './jsx/App.jsx';

export default (
  <Switch>
    <Route exact path="/" component={App}/>
  </Switch>
);