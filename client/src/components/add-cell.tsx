import React from 'react';
import { useActions } from 'hooks/use-actions';
import type { Languages } from 'state/types';

const AddCell = () => {
  const { insertCell } = useActions();

  const handleClick = (language: Languages) => {
    insertCell(language, '');
  };

  return (
    <div>
      <button onClick={() => handleClick('javascript')}>Javascript</button>
      <button onClick={() => handleClick('typescript')}>Typescript</button>
      <button onClick={() => handleClick('markdown')}>Markdown</button>
    </div>
  );
};

export default AddCell;
