import React, { useState, useEffect } from 'react';
import Resizable from 'components/resizable';
import CodeEditor from 'components/code-editor';
import Preview from 'components/preview';
import MarkdownPreview from 'components/markdown-preview';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { cumulativeCode } from 'utils/template';
import type { Languages } from 'state/types';

interface CodeCellProps {
  language: Languages;
}

const CodeCell: React.FC<CodeCellProps> = ({ language }) => {
  const { createBundle } = useActions();
  const { code, err, loading } = useTypedSelector((state) => state.bundles);
  const [input, setInput] = useState('');

  useEffect(() => {
    let timer: any;
    if (language !== 'markdown') {
      timer = window.setTimeout(() => {
        const executableCode = cumulativeCode(input);
        createBundle(executableCode, language);
      }, 750);
    }

    return () => {
      window.clearTimeout(timer);
    };
  }, [input]);

  const renderPreview = () => {
    return language === 'markdown' ? (
      <MarkdownPreview htmlCode={input} />
    ) : (
      <Preview code={code} err={err} />
    );
  };

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
            initialValue=""
            onChange={(text) => setInput(text)}
          />
        </Resizable>
        {renderPreview()}
      </div>
    </Resizable>
  );
};

export default CodeCell;
