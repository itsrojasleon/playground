import React, { useState, useEffect } from 'react';
import Resizable from 'components/resizable';
import CodeEditor from 'components/code-editor';
import Preview from 'components/preview';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';

const CodeCell = () => {
  const { createBundle } = useActions();
  const { code, err, loading } = useTypedSelector((state) => state.bundles);
  const [input, setInput] = useState('');

  useEffect(() => {
    const timer = window.setTimeout(() => {
      createBundle(input);
    }, 750);

    return () => {
      window.clearTimeout(timer);
    };
  }, [input]);

  const moreCode = `
    const render = (value) => {
      const rootElement = document.getElementById('root');
      const paragraph = document.createElement('p');
      const text = document.createTextNode(value)
      paragraph.appendChild(text)

      rootElement.appendChild(paragraph)
    }
    ${code}
  `;

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
            initialValue="const hello = 'hello there!'; console.log(hello)"
            onChange={(text) => setInput(text)}
          />
        </Resizable>
        <Preview code={moreCode} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
