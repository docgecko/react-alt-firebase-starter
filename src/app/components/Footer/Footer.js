/*! React Alt Firebase Starter */

import './Footer.less';

import React from 'react';
import { Link } from 'react-router';

export default class Footer extends React.Component {

  render() {
    return (
      <footer className="page-footer">
        <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><Link to="about" className="grey-text text-lighten-3">About</Link></li>
                  <li><a className="grey-text text-lighten-3" href="mailto:email@apertun.com">Contact Us</a></li>
                  <li><Link to="privacy" className="grey-text text-lighten-3" href="#/legal/privacy">Privacy</Link></li>
                  <li><Link to="tos" className="grey-text text-lighten-3" href="#/legal/tos">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
          </div>
        <div className="footer-copyright">
          <div className="container">
            © 2015 Copyright Text. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
}
