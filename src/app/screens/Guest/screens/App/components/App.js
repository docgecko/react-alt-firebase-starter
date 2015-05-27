/*! React Alt Firebase Starter */

import './App.less';

import React from 'react';
import { RouteHandler } from 'react-router';
import Navigation from '../../Navigation/components/Navigation';
import Footer from '../../Footer/components/Footer';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Navigation />
        <RouteHandler />
        <Footer />
      </div>
    );
  }
}
