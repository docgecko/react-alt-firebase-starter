/*! React Alt Firebase Starter */

import React from 'react';
import { Route } from 'react-router';
import Confirmation from './components/Confirmation';

export default (
  <Route name="verification" path="/verification" handler={Confirmation}/>
);
