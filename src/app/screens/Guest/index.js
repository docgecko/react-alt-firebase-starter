/*! React Alt Firebase Starter */

import React from 'react';
import { Route } from 'react-router';

import AboutRoute from './screens/About/index';
import TermsOfServiceRoute from './screens/TermsOfService/index';
import PrivacyRoute from './screens/Privacy/index';
import HomeDefaultRoute from './screens/Home/index';

export default (
  <Route name="guest" path='/'>
    {AboutRoute}
    {TermsOfServiceRoute}
    {PrivacyRoute}

    {HomeDefaultRoute}
  </Route>
);
