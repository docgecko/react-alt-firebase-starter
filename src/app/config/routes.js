/*! React Alt Firebase Starter */

import React from 'react';
import { Route, DefaultRoute, NotFoundRoute, Redirect } from 'react-router';

import App from '../shared/components/App';
import GuestRoutes from '../screens/Guest/index';
import AppRoutes from '../screens/App/index';
import AuthorizationRoutes from '../screens/Authorization/index';
import AdminRoutes from '../screens/Admin/index';
import NotFoundPage from '../shared/components/NotFoundPage';

let routes = (
  <Route handler={App}>
    {GuestRoutes}
    {AppRoutes}
    {AuthorizationRoutes}
    {AdminRoutes}

    <NotFoundRoute handler={NotFoundPage}/>
  </Route>
);

export default routes;
