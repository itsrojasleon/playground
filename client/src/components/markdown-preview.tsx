import React from 'react';
import marked from 'marked';
import styles from './markdown-preview.module.sass';

interface MarkdownPreviewProps {
  htmlCode: string;
}

const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ htmlCode }) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.html}
        dangerouslySetInnerHTML={{ __html: marked(htmlCode) }}
      />
    </div>
  );
};

export default MarkdownPreview;
