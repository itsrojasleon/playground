import React from 'react';
import CellListItem from 'components/cell-list-item';
import { useTypedSelector } from 'hooks/use-typed-selector';

const CellList = () => {
  const { data } = useTypedSelector((state) => state.cells);

  return (
    <div>
      {data.map((cell) => (
        <CellListItem key={cell.id} cell={cell} />
      ))}
    </div>
  );
};

export default CellList;
