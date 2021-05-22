import React from 'react';
import CellList from 'components/cell-list';
import { Message, InfoMessage } from 'components/message';

const Home = () => {
  return (
    <>
      <Message>
        <InfoMessage />
      </Message>
      <CellList />
    </>
  );
};

export default Home;
