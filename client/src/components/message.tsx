import React, { useState } from 'react';
import Information from './icons/information';
import Warning from './icons/warning';
import styles from './styles/info.module.sass';

const Message: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen ? (
        <section className={styles.info}>
          {children}
          <p onClick={() => setIsOpen(false)} className={styles.close}>
            Close?
          </p>
        </section>
      ) : null}
    </>
  );
};

// I know, this is not a reusable component...
// Right now this is the only message that I want to show on the screen
// to give some feedback
const InfoMessage = () => (
  <div className={styles.text}>
    <Information />
    <div>
      <p>Hey there stranger! 👋</p>
      <p>
        This a playground where you can execute Javascript/Typescript and
        Markdown code!
      </p>
      <p>
        You can use special function `render` to show something on the screen.
      </p>
    </div>
  </div>
);

interface ErrorMessageProps {
  error: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => (
  <div className={styles.text}>
    <Warning />
    <div>
      <p>Upps! Someting went wrong! 😨</p>
      <p>Error: "{error}"</p>
    </div>
  </div>
);

export { Message, ErrorMessage, InfoMessage };
