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
      
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Logo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <Link><li>Features</li></Link>
              <Link><li>Components</li></Link>
              <Link><li>JavaScript</li></Link>
            </ul>
          </div>
        </nav>      
      </header>
    );
  }
}
