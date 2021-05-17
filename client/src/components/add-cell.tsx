import React from 'react';
import Modal from 'components/modal';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import type { Languages } from 'state/types';

const AddCell = () => {
  const { insertCell } = useActions();
  // const {} = useTypedSelector(state => state.cells);

  const handleClick = (language: Languages) => {
    insertCell({ content: '', language });
  };

  return (
    <div>
      <button onClick={() => handleClick('javascript')}>Javascript</button>
      <button onClick={() => handleClick('typescript')}>Typescript</button>
      <button onClick={() => handleClick('markdown')}>Markdown</button>
      {/* <Modal>Hey</Modal> */}
    </div>
  );
};

export default AddCell;
