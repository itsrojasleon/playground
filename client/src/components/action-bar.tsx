import React from 'react';
import Close from './icons/close';
import { useActions } from 'hooks/use-actions';
import styles from './styles/action-bar.module.sass';
import type { Languages } from 'state/types';

interface ActionBarProps {
  id: string;
  language: Languages;
  onToggleEditor: () => void;
  isOpen: boolean;
}

const ActionBar: React.FC<ActionBarProps> = ({
  id,
  language,
  onToggleEditor,
  isOpen,
}) => {
  const { deleteCell } = useActions();

  return (
    <div className={styles.bar}>
      <p className={styles.lang}>{language}</p>
      <div className={styles.options}>
        <p onClick={onToggleEditor} className={styles.hide}>
          {isOpen ? 'Hide' : 'Show'} code
        </p>
        <Close onClick={() => deleteCell(id)} />
      </div>
    </div>
  );
};

export default ActionBar;
