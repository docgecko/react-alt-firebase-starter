/*! React Alt Firebase Starter */

import React from 'react';
import { Route } from 'react-router';
import Login from './components/Login';

export default (
  <Route name="login" path="/login" handler={Login}/>
);
