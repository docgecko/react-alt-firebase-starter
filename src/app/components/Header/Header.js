/*! React Alt Firebase Starter */

import { Link } from 'react-router';
import React from 'react';

import './Header.less';

export default class Header extends React.Component {
  
  render() {
    return (
      <header>
        <ul className="navigation">
          <Link to='home'><li className="navigation-item">HOME</li></Link>
        </ul>
      </header>
    );
  }
}
