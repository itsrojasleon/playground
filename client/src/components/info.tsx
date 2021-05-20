import React, { useState } from 'react';
import Information from './icons/information';
import styles from './styles/info.module.sass';

const Info = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen ? (
        <section className={styles.info}>
          <div className={styles.text}>
            <Information />
            <div>
              <p>Hey there stranger! 👋</p>
              <p>
                This a playground where you can execute Javascript/Typescript
                and Markdown code!
              </p>
              <p>
                You can use special function `render` to show something on the
                screen.
              </p>
            </div>
          </div>
          <p onClick={() => setIsOpen(false)} className={styles.close}>
            Close?
          </p>
        </section>
      ) : null}
    </>
  );
};

export default Info;
