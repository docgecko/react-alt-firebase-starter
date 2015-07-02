/*! React Alt Firebase Starter */

import './Navigation.less';

import React from 'react';
import { Link } from 'react-router';

export default class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper blue darken-4">
          <Link to='home' className="brand-logo center">ɑpərtun</Link>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><Link to='home'><i className="material-icons">home</i></Link></li>
            <li><Link to='features'>Features</Link></li>
            <li><Link to='pricing'>Pricing</Link></li>
            <li><Link to='blog'>Blog</Link></li>
            <li><Link to='contact'>Contact</Link></li>
          </ul>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to='register'>Sign Up</Link></li>
            <li><Link to='login'>Login</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}
