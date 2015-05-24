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
                <h5 className="white-text">Copyright &copy; 2015 Apertun. All rights reserved</h5>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#/about">About</a></li>
                  <li><a className="grey-text text-lighten-3" href="ailto:email@apertun.com">Contact Us</a></li>
                  <li><span>or</span></li>
                  <li><a className="grey-text text-lighten-3" href="#">Follow us on Twitter</a></li>
                  <li><span>Our Policies</span></li>
                  <li><a className="grey-text text-lighten-3" href="#/legal/privacy">Privacy</a></li>
                  <li><a className="grey-text text-lighten-3" href="#/legal/tos">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2014 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
    );
  }
}
