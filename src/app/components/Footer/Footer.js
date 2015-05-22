/*! React Alt Firebase Starter */

import React from 'react';

import './Footer.less';

export default class Footer extends React.Component {
  
  render() {
    return (
      <footer>
        <div class="navbar.navbar-fixed-bottom">
          <div class="container">
            <p class="text-center text-muted">
              Copyright &copy; 2015 Apertun. All rights reserved.
              <a href="/about">About</a>
              <a href="mailto:email@apertun.com">Contact Us</a>
              or
              <a href="">Follow us on Twitter</a>
              <br/>
              Our Policies
              <a href="legal/privacy">Privacy</a>
              <a href="legal/tos">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
