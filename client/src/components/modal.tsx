import React from 'react';
import Portal from './portal';

const Modal: React.FC = ({ children }) => {
  return <Portal>{children}</Portal>;
};

export default Modal;
