import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useActions } from 'hooks/use-actions';
import CellList from 'components/cell-list';
import { Message, ErrorMessage, InfoMessage } from 'components/message';
import { useTypedSelector } from 'hooks/use-typed-selector';

const Playground = () => {
  const { id } = useParams<{ id: string }>();
  const { fetchPlayground } = useActions();
  const { data, loading, error } = useTypedSelector((state) => state.cells);

  useEffect(() => {
    fetchPlayground(id);
  }, [id]);

  if (error)
    return (
      <Message>
        <ErrorMessage error={error} />
      </Message>
    );

  return (
    <>
      <Message>
        <InfoMessage />
      </Message>
      <CellList />
    </>
  );
};

export default Playground;
