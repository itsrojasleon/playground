import React, { useEffect } from 'react';
import type { Cell } from 'state/types';
import CodeEditor from './code-editor';
import Resizable from './resizable';
import MarkdownPreview from './markdown-preview';
import Preview from './preview';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { cumulativeCode } from 'utils/template';

interface CellListItemProps {
  cell: Cell;
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
  const { updateCell, createBundle } = useActions();
  const bundle = useTypedSelector((state) => state.bundles[cell.id]);

  useEffect(() => {
    // If the bundle does not exist, create it and then do nothing
    if (!bundle) {
      createBundle(cell.id, cumulativeCode(cell.content), cell.language);
      return;
    }

    const timer = window.setTimeout(() => {
      createBundle(cell.id, cumulativeCode(cell.content), cell.language);
    }, 2000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [cell.id, cumulativeCode(cell.content), createBundle]);

  // console.log(bundle);

  return (
    <>
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
              onChange={(value) => updateCell(cell.id, value)}
            />
          </Resizable>
          {cell.language === 'markdown' ? (
            <MarkdownPreview htmlCode={cell.content} />
          ) : (
            <>
              {cell.id}
              {cell.content}
              {JSON.stringify(bundle?.loading ? 'true' : 'false')}
              {JSON.stringify(typeof bundle?.loading)}
              {/* {bundle.loading ? (
                <div>Loading...</div>
              ) : (
                <Preview code={bundle.code} err={bundle.error} />
              )} */}
            </>
          )}
        </div>
      </Resizable>
    </>
  );
};

export default CellListItem;
