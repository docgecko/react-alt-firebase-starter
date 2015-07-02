/*! React Alt Firebase Starter */

import React from 'react';
import { Route } from 'react-router';

import Layout from './shared/Layout/components/Layout';

import FeaturesRoute from './screens/Features/index';
import BlogRoute from './screens/Blog/index';
import PricingRoute from './screens/Pricing/index';
import ContactRoute from './screens/Contact/index';

import AboutRoute from './screens/About/index';
import TermsOfServiceRoute from './screens/TermsOfService/index';
import PrivacyRoute from './screens/Privacy/index';
import HomeDefaultRoute from './screens/Home/index';

export default (
  <Route name='guest' path='/' handler={Layout}>
    {FeaturesRoute}
    {BlogRoute}
    {PricingRoute}
    {ContactRoute}

    {AboutRoute}
    {TermsOfServiceRoute}
    {PrivacyRoute}

    {HomeDefaultRoute}
  </Route>
);
