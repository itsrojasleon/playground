import React, { useEffect, useState } from 'react';
import CodeEditor from './code-editor';
import Resizable from './resizable';
import MarkdownPreview from './markdown-preview';
import Preview from './preview';
import ActionBar from './action-bar';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { cumulativeCode } from 'utils/template';
import type { Cell } from 'state/types';
import styles from './styles/cell-list-item.module.sass';

interface CellListItemProps {
  cell: Cell;
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
  const { updateCell, createBundle } = useActions();
  const bundle = useTypedSelector((state) => state.bundles[cell.id]);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // If the bundle does not exist, create it and then do nothing
    if (!bundle) {
      createBundle(cell.id, cumulativeCode(cell.content), cell.language);
      return;
    }

    const timer = window.setTimeout(() => {
      createBundle(cell.id, cumulativeCode(cell.content), cell.language);
    }, 1000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [cell.id, cumulativeCode(cell.content), createBundle]);

  return (
    <div className={styles.item}>
      <ActionBar
        language={cell.language}
        id={cell.id}
        isOpen={isOpen}
        onToggleEditor={() => setIsOpen(!isOpen)}
      />
      <Resizable key={cell.id} direction="vertical">
        <div
          style={{
            height: 'calc(100% - 10px)',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          {isOpen ? (
            <Resizable direction="horizontal">
              <CodeEditor
                language={cell.language}
                onChange={(value) => updateCell(cell.id, value)}
                initialValue={
                  cell.language === 'typescript'
                    ? '// @ts-nocheck'
                    : cell.content
                }
              />
            </Resizable>
          ) : null}
          {cell.language === 'markdown' ? (
            <MarkdownPreview htmlCode={cell.content} />
          ) : (
            <>
              {!bundle || bundle.loading ? (
                <div>Loading...</div>
              ) : (
                <Preview code={bundle.code} err={bundle.error} />
              )}
            </>
          )}
        </div>
      </Resizable>
    </div>
  );
};

export default CellListItem;
