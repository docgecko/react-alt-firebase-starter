/*! React Alt Firebase Starter */

import './Header.less';

import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {

  render() {
    return (
      <header>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="about">About</Link></li>
              <li><a href="#">Components</a></li>
              <li><a href="#">JavaScript</a></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
