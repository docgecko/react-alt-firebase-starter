/*! React Alt Firebase Starter */

import './Footer.less';

import React from 'react';
import { Link } from 'react-router';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer blue darken-4">
        <div className="container">
            <div className="row">
              <div className="col 8 s8">
                <h5 className="white-text">Company</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col 2 offset-8 s2">
                <h5 className="white-text">Company</h5>
                <ul>
                  <li><Link to="about" className="grey-text text-lighten-3">About</Link></li>
                  <li><Link to="contact" className="grey-text text-lighten-3">Contact</Link></li>
                </ul>
              </div>
              <div className="col 2 offset-10 s2">
                <h5 className="white-text">Legal</h5>
                <ul>
                  <li><Link to="privacy" className="grey-text text-lighten-3" href="#/legal/privacy">Privacy</Link></li>
                  <li><Link to="terms-of-service" className="grey-text text-lighten-3" href="#/legal/tos">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
          </div>
        <div className="footer-copyright white">
          <div className="container">
            All text & design is copyright © 2015 Apertun. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
}
