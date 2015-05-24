/*! React Alt Firebase Starter */

import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';
import App from './components/App';
import Home from './components/About';
import About from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import TermsOfService from './components/Legal/TermsOfService';
import Privacy from './components/Legal/Privacy';
import NotFoundPage from './components/NotFoundPage';


let routes = (
    <Route handler={App}>
      <Route name='about' path='about' handler={About} />
      <Route name='signup' path='getstarted' handler={Signup} />
      <Route name='login' path='login' handler={Login} />

      <Route name='tos' path='legal/tos' handler={TermsOfService} />
      <Route name='privacy' path='legal/privacy' handler={Privacy} />

      <NotFoundRoute handler={NotFoundPage} />

      <DefaultRoute name='home' handler={Home} />
    </Route>
);

export default routes;
