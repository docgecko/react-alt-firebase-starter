/*! React Alt Firebase Starter */

import React from 'react';
import { Route } from 'react-router';
import ForgotPassword from './components/ForgotPassword';

export default (
  <Route name="forgot-password" path="/forgot-password" handler={ForgotPassword}/>
);
