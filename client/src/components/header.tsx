import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h2>Logo</h2>
      <nav>
        <ul className={styles['wrapper-links']}>
          <li>
            <Link className={styles.link} to="/">
              Home
            </Link>
          </li>
          <li>
            <button
              onClick={async () => {
                await axios.get('/api/users/login');
              }}
              className={styles.link}
            >
              Login with Github
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
