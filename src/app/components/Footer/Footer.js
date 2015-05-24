/*! React Alt Firebase Starter */

import './Footer.less';

import React from 'react';
import { Link } from 'react-router';

export default class Footer extends React.Component {

  render() {
    return (
      <footer className="page-footer">
        <div className="footer-copyright">
          <div className="container">
          Copyright &copy; 2015 Apertun. All rights reserved.
          <Link to="about" className="grey-text text-lighten-3">About</Link>
          <a className="grey-text text-lighten-3" href="mailto:email@apertun.com">Contact Us</a>
          <span> or </span>
          <a className="grey-text text-lighten-3" href="#">Follow us on Twitter</a>
          <span>Our Policies</span>
          <Link to="privacy" className="grey-text text-lighten-3" href="#/legal/privacy">Privacy</Link>
          <Link to="tos" className="grey-text text-lighten-3" href="#/legal/tos">Terms of Service</Link>
          </div>
        </div>
      </footer>
    );
  }
}
