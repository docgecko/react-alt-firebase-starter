/*! React Alt Firebase Starter */

import React from 'react';
import { Route } from 'react-router';
import Pricing from './components/Pricing';

export default (
  <Route name='pricing' path='/pricing' handler={Pricing}/>
);
