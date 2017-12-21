import React, { Component } from 'react';
import styles from './Header.css';

class Header extends Component {
  render() {
    return (
      <h1 className={styles.title}>TEAMWARD</h1>
    );
  }
}

export default Header;
