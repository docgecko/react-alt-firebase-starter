/*! React Alt Firebase Starter */

import React from 'react';
import { Route } from 'react-router';

import Authentication from './shared/Layout/components/Layout';
import RegistrationRoute from './screens/Registration/index';
import LoginRoute from './screens/Login/index';
import ForgotPasswordRoute from './screens/ForgotPassword/index';
import ConfirmationRoute from './screens/Confirmation/index';

export default (
  <Route name='authorization' path='/' handler={Authentication}>
    {RegistrationRoute}
    {ForgotPasswordRoute}
    {LoginRoute}
    {ConfirmationRoute}
  </Route>
);
