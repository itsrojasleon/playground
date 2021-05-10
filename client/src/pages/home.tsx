import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CodePreview from '../components/code-preview';
import CodeEditor from '../components/code-editor';

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
    <div>
      <CodeEditor
        initialValue="const a = 1;"
        onChange={(value) => setText(value)}
      />
      <button onClick={handleClick}>Bundle!</button>
      <CodePreview code={code} />
    </div>
  );
};

export default Home;
