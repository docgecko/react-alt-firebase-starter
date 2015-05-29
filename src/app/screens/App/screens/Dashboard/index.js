/*! React Alt Firebase Starter */

import React from 'react';
import { Route } from 'react-router';
import Dashboard from './components/Dashboard';

export default (
  <Route name="Dashboard" path="/dashboard" handler={Dashboard}/>
);
