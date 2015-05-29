/*! React Alt Firebase Starter */

import React from 'react';
import { Route, DefaultRoute, NotFoundRoute, Redirect } from 'react-router';

import App from '../shared/components/App';
import AnonymousRoutes from '../screens/Anonymous/index';
import AppRoutes from '../screens/App/index';
import AuthenticationRoutes from '../screens/Authentication/index';
import AdminRoutes from '../screens/Admin/index';
import NotFoundPage from '../shared/components/NotFoundPage';

let routes = (
  <Route handler={App}>
    {AnonymousRoutes}
    {AppRoutes}
    {AuthenticationRoutes}
    {AdminRoutes}

    <NotFoundRoute handler={NotFoundPage}/>
  </Route>
);

export default routes;
