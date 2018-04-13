import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <header className="header">
            <h1 className="heading">Welcome to Rock, Paper, Scissors.</h1>
            <p className="paragraph">Select your weapon below:</p>
        </header>
    );
  }
}

export default Header;
