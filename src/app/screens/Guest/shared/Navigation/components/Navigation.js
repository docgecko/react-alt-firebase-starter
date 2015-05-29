/*! React Alt Firebase Starter */

import './Navigation.less';

import React from 'react';
import { Link } from 'react-router';

export default class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to='home' className="brand-logo">Logo</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to='about'>About</Link></li>
            <li><Link to='sign-up'>Sign Up</Link></li>
            <li><Link to='login'>Login</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}
