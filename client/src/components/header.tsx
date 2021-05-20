import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import AddCell from './add-cell';

const Header = () => {
  return (
    <header className={styles.header}>
      <h2>
        <Link className={styles.playground} to="/">
          Playground
        </Link>
      </h2>
      <AddCell />
    </header>
  );
};

export default Header;
