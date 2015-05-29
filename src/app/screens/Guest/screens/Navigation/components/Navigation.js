/*! React Alt Firebase Starter */

import './Navigation.less';

import React from 'react';
import { Link } from 'react-router';
import Home from '../../Home/components/Home';

export default class Navigation extends React.Component {

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to='Home' className="brand-logo">Logo</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link>About</Link></li>
            <li><Link>Sign Up</Link></li>
            <li><Link>Login</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}
