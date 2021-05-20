import React from 'react';
import styles from './info.module.sass';

const Info = () => {
  return (
    <div className={styles.info}>
      <p>Hey there stranger! 👋</p>
      <p>
        This a playground where you can execute Javascript/Typescript and
        Markdown code!
      </p>
    </div>
  );
};

export default Info;
