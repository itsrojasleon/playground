import React, { ButtonHTMLAttributes } from 'react';
import Add from './icons/add';
import styles from './styles/button.module.sass';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ icon, children, ...props }) => {
  return (
    <button {...props} className={styles.button}>
      {children}
      {icon && (
        <span className={styles.icon}>
          <Add />
        </span>
      )}
    </button>
  );
};

export default Button;
