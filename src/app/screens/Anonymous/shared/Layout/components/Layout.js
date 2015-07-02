/*! React Alt Firebase Starter */

import './Layout.less';

import React from 'react';
import { RouteHandler } from 'react-router';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';

export default class Guest extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <main>
          <RouteHandler />
        </main>
        <Footer/>
      </div>
    );
  }
}
