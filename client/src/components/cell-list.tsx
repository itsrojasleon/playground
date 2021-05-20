import React from 'react';
import CellListItem from 'components/cell-list-item';
import { useTypedSelector } from 'hooks/use-typed-selector';

const CellList = () => {
  const { data } = useTypedSelector((state) => state.cells);
  const bundles = useTypedSelector((state) => state.bundles);

  console.log(bundles);

  return (
    <>
      {data.map((cell) => (
        <CellListItem key={cell.id} cell={cell} />
      ))}
    </>
  );
};

export default CellList;
