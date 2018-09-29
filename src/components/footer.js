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
          <span>Powered by</span>
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            <img src={ReactLogo} alt="React"></img>
          </a>
          <span>&</span>
          <a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer">
            <img src={WPLogo} alt="WordPress"></img>
          </a>
        </div>
      </div>
    );
  }
}
