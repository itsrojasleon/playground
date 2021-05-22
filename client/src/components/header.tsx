import React from 'react';
import { Link } from 'react-router-dom';
import AddCell from './add-cell';
import Button from './button';
import Github from './icons/github';
import styles from './styles/header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h2>
        <Link className={styles.playground} to="/">
          Playground
        </Link>
      </h2>
      <p className={styles.share}>Share playground!</p>
      <div className={styles.last}>
        <AddCell />
        <a href="https://github.com/rojasleon/playground" target="_blank">
          <Github />
        </a>
      </div>
    </header>
  );
};

export default Header;
