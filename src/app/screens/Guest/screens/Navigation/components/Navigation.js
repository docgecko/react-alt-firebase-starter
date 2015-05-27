/*! React Alt Firebase Starter */

import './Navigation.less';

import React from 'react';
import { Link } from 'react-router';

export default class Navigation extends React.Component {

  render() {
    return (
      <header>
        <nav>
          <div className="nav-wrapper">
            <Link to='Home' className="brand-logo">Logo</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="About">About</Link></li>
              <li><Link to="SignUp">Sign Up</Link></li>
              <li><Link to="Login">Login</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
