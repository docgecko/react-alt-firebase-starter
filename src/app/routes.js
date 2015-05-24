/*! React Alt Firebase Starter */

import React from 'react';
import { Route, DefaultRoute } from 'react-router';
import About from './components/About';

import App from './components/App/App';

let routes = (
    <Route name='home' path='/' handler={App}>
      <Route name='about' path='/about' handler={About} />
    </Route>
);

export default routes;
