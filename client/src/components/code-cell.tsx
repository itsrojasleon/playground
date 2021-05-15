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

  const cumulativeCode = `
    // rename import statements to avoid naming collisions
    // check out the bundler file to see the correct import statement
    import _React from 'react';
    import _ReactDOM from 'react-dom';

    const jsxElements = []

    const rootElement = document.getElementById('root')

    const render = (value) => {
      if (typeof value === 'object') {
        // jsx elements
        if (value.$$typeof && value.props) {
          jsxElements.push(value)
          const App = () => jsxElements.map(el => el)
          _ReactDOM.render(<App />, rootElement);
        // complex values as objects and arrays
        } else {
          appendParagraph(JSON.stringify(value));
        }
      // regular values
      } else {
        appendParagraph(value);
      }
    }

    const appendParagraph = (value) => {
      const paragraph = document.createElement('p');
      const text = document.createTextNode(value)
      paragraph.appendChild(text)

      rootElement.appendChild(paragraph)
    }
    ${input}
  `;

  useEffect(() => {
    const timer = window.setTimeout(() => {
      createBundle(cumulativeCode);
    }, 750);

    return () => {
      window.clearTimeout(timer);
    };
  }, [input]);

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
            language="markdown"
            initialValue="render(<h1>Hello!</h1>)"
            onChange={(text) => setInput(text)}
          />
        </Resizable>
        <Preview code={code} err={err} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
