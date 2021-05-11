import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import CodePreview from 'components/code-preview';
import CodeEditor from 'components/code-editor';
import Resizable from 'components/resizable';
// import Resizable from 'components/resizable';

const Home = () => {
  const [text, setText] = useState('');
  const [code, setCode] = useState('');

  // useEffect(() => {

  //   if (text) {
  //     makeRequest();
  //   }
  // }, [text]);

  const handleClick = async () => {
    try {
      const { data } = await axios.post<{ code: string }>('/api/bundler', {
        rawCode: text,
      });

      setCode(data.code);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Resizable direction="horizontal">
        <CodeEditor
          initialValue="const a = 'hello there!'"
          onChange={() => {}}
        />
      </Resizable>
      <CodePreview code={code} />
    </div>
  );
};

export default Home;
