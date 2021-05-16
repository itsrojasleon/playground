import React from 'react';
import marked from 'marked';
import styles from './markdown-preview.module.sass';

interface MarkdownPreviewProps {
  code: string;
}

const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ code }) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.html}
        dangerouslySetInnerHTML={{ __html: marked(code) }}
      />
    </div>
  );
};

export default MarkdownPreview;
