/*! React Alt Firebase Starter */

import './Header.less';

import React from 'react';
import { Link } from 'react-router';
import Navigation from '../../Navigation/components/Navigation';

export default class Header extends React.Component {

  render() {
    return (
      <header>
        <Navigation/>
      </header>
    );
  }
}
