import React from 'react';
import CellListItem from 'components/cell-list-item';
import { useTypedSelector } from 'hooks/use-typed-selector';

const CellList = () => {
  const { data } = useTypedSelector((state) => state.cells);

  return (
    <>
      {data.map((cell) => (
        <CellListItem key={cell.id} cell={cell} />
      ))}
      {!data.length && <p>No cells were found. Add one by yourself!</p>}
    </>
  );
};

export default CellList;
