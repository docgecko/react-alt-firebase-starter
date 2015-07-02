/*! React Alt Firebase Starter */

import React from 'react';
import { Route } from 'react-router';
import Blog from './components/Blog';

export default (
  <Route name='blog' path='/blog' handler={Blog}/>
);
