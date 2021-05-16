import React, { useState, useEffect } from 'react';
import Resizable from 'components/resizable';
import CodeEditor from 'components/code-editor';
import Preview from 'components/preview';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { cumulativeCode, markdownCumulativeCode } from 'utils/template';
import type { Languages } from 'utils/types';

interface CodeCellProps {
  language: Languages;
}

const CodeCell: React.FC<CodeCellProps> = ({ language }) => {
  const { createBundle } = useActions();
  const { code, err, loading } = useTypedSelector((state) => state.bundles);
  const [input, setInput] = useState('');

  useEffect(() => {
    const timer = window.setTimeout(() => {
      let executableCode;

      if (language === 'javascript' || language === 'typescript') {
        executableCode = cumulativeCode(input);
      } else {
        // we don't want to send the cumulative code to the server
        // it's not going to parse it correctly
        executableCode = markdownCumulativeCode(code);
      }
      createBundle(executableCode, language);
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
            language={language}
            initialValue="# Hello"
            onChange={(text) => setInput(text)}
          />
        </Resizable>
        <Preview code={code} err={err} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
