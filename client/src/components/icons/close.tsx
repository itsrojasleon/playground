import React from 'react';
import styles from '../styles/icons/close.module.sass';

interface AddProps {
  onClick?: () => void;
}

const Add: React.FC<AddProps> = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      className={styles.close}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export default Add;
