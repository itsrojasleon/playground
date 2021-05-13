import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import CodePreview from 'components/code-preview';
import CodeEditor from 'components/code-editor';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
// import Resizable from 'components/resizable';

const Home = () => {
  const [text, setText] = useState('');
  const { createBundle } = useActions();
  const { loading, err, code } = useTypedSelector((state) => state.bundles);

  // const handleClick = async () => {
  //   try {
  //     createBundle(text);
  //   } catch (err) {
  //     console.log(err.response.data);
  //   }
  // };

  useEffect(() => {
    if (!text) {
      console.log('Empty code');
      return;
    }

    const timer = window.setTimeout(() => {
      createBundle(text);
    }, 1000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [text]);

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      {/* Extremely hard logic to make a resizer */}
      <div
        style={{
          resize: 'horizontal',
          overflow: 'auto',
          width: '50%',
          height: '100%',
        }}
      >
        <CodeEditor
          initialValue="// Welcome to this amazing playground!"
          onChange={(newText) => setText(newText)}
        />
      </div>
      <CodePreview code={code} />
      {/* <button onClick={handleClick}>Bundle!</button> */}
    </div>
  );
};

export default Home;
