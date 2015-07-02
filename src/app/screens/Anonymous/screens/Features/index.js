/*! React Alt Firebase Starter */

import React from 'react';
import { Route } from 'react-router';
import Features from './components/Features';

export default (
  <Route name='features' path='/features' handler={Features}/>
);
