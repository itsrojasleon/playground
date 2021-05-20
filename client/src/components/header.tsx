import React from 'react';
import { Link } from 'react-router-dom';
import AddCell from './add-cell';
import styles from './styles/header.module.css';

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
