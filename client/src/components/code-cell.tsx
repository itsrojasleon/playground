import React, { useState, useEffect } from 'react';
import Resizable from 'components/resizable';
import CodeEditor from 'components/code-editor';
import Preview from 'components/preview';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';

const CodeCell = () => {
  // const [code, setCode] = useState('');
  // const [input, setInput] = useState('');
  // const {} = useState();

  useEffect(() => {
    // window.setTimeout(() => {}, 1000);
  }, []);

  return (
    <Resizable direction="vertical">
      <div
        style={{
          height: 'calc(100% - 10px)',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue="// Welcome to this amazing playground!"
            onChange={() => {}}
          />
          {/* <div style={{ backgroundColor: 'red', width: '100%' }}>
            Hello there
          </div> */}
        </Resizable>
        {/* <Preview code="" /> */}
        <div style={{ backgroundColor: 'yellow' }}>Preview window</div>
      </div>
    </Resizable>
  );
};

export default CodeCell;
