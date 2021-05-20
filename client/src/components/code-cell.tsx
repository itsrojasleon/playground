import React, { useState, useEffect, memo } from 'react';
import Resizable from 'components/resizable';
import CodeEditor from 'components/code-editor';
import Preview from 'components/preview';
import MarkdownPreview from 'components/markdown-preview';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { cumulativeCode } from 'utils/template';

const CodeCell: React.FC = ({}) => {
  const { createBundle } = useActions();
  const bundle = useTypedSelector((state) => state.bundles);
  const { data } = useTypedSelector((state) => state.cells);
  const [input, setInput] = useState('');

  // useEffect(() => {
  //   let timer: any;
  //   if (language !== 'markdown') {
  //     timer = window.setTimeout(() => {
  //       createBundle(cumulativeCode(input), language, cellId);
  //     }, 2000);
  //   }

  //   return () => {
  //     window.clearTimeout(timer);
  //   };
  // }, [input]);

  return (
    <div>
      {data.map((cell) => (
        <Resizable key={cell.id} direction="vertical">
          <div
            style={{
              height: 'calc(100% - 10px)',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Resizable direction="horizontal">
              <CodeEditor
                language={cell.language}
                initialValue=""
                onChange={(text) => setInput(text)}
              />
            </Resizable>
            {cell.language === 'markdown' ? (
              <MarkdownPreview htmlCode={input} />
            ) : (
              <div>{JSON.stringify(cell.content)}</div>
              // <Preview code={cell!.code} err={cell!.error} />
            )}
          </div>
        </Resizable>
      ))}
    </div>
  );
};

export default CodeCell;
