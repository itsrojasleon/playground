import React from 'react';
import Close from './icons/close';
import { useActions } from 'hooks/use-actions';
import styles from './action-bar.module.sass';
import type { Languages } from 'state/types';

interface ActionBarProps {
  id: string;
  language: Languages;
}

const ActionBar: React.FC<ActionBarProps> = ({ id, language }) => {
  const { deleteCell } = useActions();

  return (
    <div className={styles.bar}>
      <p className={styles.lang}>{language}</p>
      <Close onClick={() => deleteCell(id)} />
    </div>
  );
};

export default ActionBar;
