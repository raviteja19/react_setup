import React from 'react';
import {Route,Switch} from 'react-router-dom';
import App from './jsx/App.jsx';
import Header from './jsx/Header';
import Hospital from './jsx/hospitals'

export default (
  <div>
    <Header/>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route  path="/Hospitals" component={Hospital}/>
    </Switch>
  </div>
);