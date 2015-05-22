/*! React Alt Firebase Starter */

import React from 'react';
import { RouteHandler } from 'react-router';
import Header from '../Header';
import Footer from '../Footer';

import './App.less';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Hello, world!</h1>
        <RouteHandler {...this.props} />
        <Footer />
      </div>
    );
  }
}
