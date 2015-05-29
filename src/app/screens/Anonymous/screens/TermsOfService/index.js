/*! React Alt Firebase Starter */

import React from 'react';
import { Route } from 'react-router';
import TermsOfService from './components/TermsOfService';

export default (
  <Route name='terms-of-service' path='/legal/tos' handler={TermsOfService}/>
);
