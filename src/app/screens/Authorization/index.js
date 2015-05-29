/*! React Alt Firebase Starter */

import React from 'react';
import { Route } from 'react-router';

import Authorization from './shared/Layout/components/Layout';
import SignUpRoute from './screens/SignUp/index';
import LoginRoute from './screens/Login/index';
import ForgotPasswordRoute from './screens/ForgotPassword/index';

export default (
  <Route name='authorization' path='/' handler={Authorization}>
    {SignUpRoute}
    {ForgotPasswordRoute}
    {LoginRoute}
  </Route>
);
