import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CodePreview from '../components/code-preview';
import CodeEditor from '../components/code-editor';

const Home = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const { data } = await axios.post('/api/bundler', { rawCode: text });

        console.log(data);
      } catch (err) {
        console.error(err.response.data);
      }
    };

    makeRequest();
  }, [text]);

  return (
    <div>
      <CodeEditor
        initialValue="const a = 1;"
        onChange={(value) => setText(value)}
      />
      Text:{text}
      <CodePreview />
    </div>
  );
};

export default Home;
