/*! React Alt Firebase Starter */

import React from 'react';
import { Route } from 'react-router';
import About from './components/About';

export default (
  <Route name='about' path='/about' handler={About}/>
);
