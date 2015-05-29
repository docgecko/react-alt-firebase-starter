/*! React Alt Firebase Starter */

import React from 'react';
import { Route } from 'react-router';

import App from './shared/Layout/components/Layout';
import DashboardRoute from './screens/Dashboard/index';

export default (
  <Route name='app' path='/' handler={App}>
    {DashboardRoute}
  </Route>
);
