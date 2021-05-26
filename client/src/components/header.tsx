import React from 'react';
import { Link } from 'react-router-dom';
import AddCell from './add-cell';
import Github from './icons/github';
import styles from './styles/header.module.css';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';

const Header = () => {
  const { createPlayground } = useActions();
  const { insertedId, data } = useTypedSelector((state) => state.cells);

  return (
    <header className={styles.header}>
      <h2>
        <Link className={styles.playground} to="/">
          Playground
        </Link>
      </h2>
      <div className={styles.share}>
        {data.length >= 1 &&
          (insertedId ? (
            <input
              readOnly
              value={`${
                import.meta.env.NODE_ENV === 'production'
                  ? 'playground-prod.herokuapp.com'
                  : 'http://localhost:8080'
              }/p/${insertedId}`}
            />
          ) : (
            <p onClick={() => createPlayground(data)}>Share playground!</p>
          ))}
      </div>

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
