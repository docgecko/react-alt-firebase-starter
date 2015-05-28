/*! React Alt Firebase Starter */

import React from 'react';
import { DefaultRoute } from 'react-router';
import Home from './components/Home';

export default (
  <DefaultRoute name='home' path='/' handler={Home}/>
);
