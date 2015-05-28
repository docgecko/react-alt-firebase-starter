/*! React Alt Firebase Starter */

import React from 'react';
import { Route, DefaultRoute, NotFoundRoute, Redirect } from 'react-router';

import App from '../screens/Shared/screens/App/components/App';
import GuestRoutes from '../screens/Guest/index';
import AuthorizedRoutes from '../screens/Authorized/index';
import AdminRoutes from '../screens/Admin/index';
import NotFoundPage from '../screens/Shared/screens/NotFoundPage/components/NotFoundPage';

let routes = (
  <Route handler={App}>
    {GuestRoutes}

    {AuthorizedRoutes}

    {AdminRoutes}

    <NotFoundRoute handler={NotFoundPage}/>
  </Route>
);

export default routes;
