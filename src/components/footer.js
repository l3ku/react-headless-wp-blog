import React, { Component } from 'react';
import Utils from './../utils';
import config from './../app-config';
import ReactLogo from './../icons/react.png';
import WPLogo from './../icons/wordpress.png';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-copyright-section">
          &copy;&nbsp;
          <a href="{config.authorHomePage ? config.authorHomePage : '/'}">
            {config.authorName ? config.authorName : 'Anonymous Person'}
          </a> {(new Date()).getFullYear()}
        </div>
        <div className="footer-ps-section">
          <span>Powered by</span> <img src={ReactLogo} alt="React"></img> <span>&</span> <img src={WPLogo} alt="WordPress"></img>
        </div>
      </div>
    );
  }
}
