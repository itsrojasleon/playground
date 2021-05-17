import React from 'react';
import CodeCell from 'components/code-cell';
import AddCell from 'components/add-cell';
// import {} from 'hooks/use-actions'
import { useTypedSelector } from 'hooks/use-typed-selector';

const Home = () => {
  const { data } = useTypedSelector((state) => state.cells);

  return (
    <>
      <AddCell />
      {/* {JSON.stringify(data)} */}
      {data.map((d) => (
        <CodeCell key={d.id} language={d.language} />
      ))}
      {/* <CodeCell language="markdown" /> */}
    </>
  );
};

export default Home;
