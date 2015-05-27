/*! React Alt Firebase Starter */

import React from 'react';
import { Route, DefaultRoute, NotFoundRoute, Redirect } from 'react-router';

import Home from '../screens/Guest/screens/Home/index';
import About from '../screens/Guest/screens/About/index';
import SignUp from '../screens/Guest/screens/SignUp/index';

import Dashboard from '../screens/App/screens/Dashboard/index';

import App from '../screens/Shared/screens/App/components/App';
import NotFoundPage from '../screens/Shared/screens/NotFoundPage/components/NotFoundPage';

let routes = (
  <Route handler={App}>
    <Route name="Guest" path='/'>
      <Route name='About'/>
      <Route name='TermsOfService'/>
      <Route name='Privacy'/>

      <DefaultRoute name='Home' path='/' handler={Home}/>
    </Route>
    <Route name='App' path='/app'>
      <Route name='Logout' path='/logout'/>

      <DefaultRoute handler={Dashboard}/>
    </Route>
    <Route name='Authentication' path='/'>
      <Route name='SignUp'/>
      <Route name='Verified'/>
      <Route name='ForgotPassword'/>

      <DefaultRoute handler={Login}/>
    </Route>
    <Route name='Admin' path='/admin'>

    </Route>

    <NotFoundRoute handler={NotFoundPage}/>
  </Route>
);

export default routes;
