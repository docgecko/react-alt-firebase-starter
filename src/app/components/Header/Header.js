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
            <Link to='home' className="brand-logo">Logo</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="about">About</Link></li>
              <li><Link to="signup">Sign Up</Link></li>
              <li><Link to="login">Login</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
