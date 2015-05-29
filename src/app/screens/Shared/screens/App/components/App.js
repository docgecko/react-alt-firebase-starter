/*! React Alt Firebase Starter */

import './App.less';

import React from 'react';
import { RouteHandler } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <RouteHandler />
      </div>
    );
  }
}
