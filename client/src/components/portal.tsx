import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const Portal: React.FC = ({ children }) => {
  const modalRoot = document.getElementById('modal');
  const el = document.createElement('div');

  useEffect(() => {
    if (!modalRoot) return;

    modalRoot.appendChild(el);

    return () => {
      modalRoot.removeChild(el);
    };
  }, []);

  return ReactDOM.createPortal(children, el);
};

export default Portal;
