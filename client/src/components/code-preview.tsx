import React, { useEffect, useRef } from 'react';
import { html } from '../utils/preview';
import styles from './code-preview.module.sass';

interface CodePreviewProps {
  code: string;
}

const CodePreview: React.FC<CodePreviewProps> = ({ code }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!iframeRef.current) {
      return;
    }

    iframeRef.current.srcdoc = html;

    iframeRef.current.contentWindow?.postMessage(code, '*');
  }, [code]);

  return (
    <div className={styles.wrapper}>
      <iframe
        ref={iframeRef}
        sandbox="allow-scripts"
        srcDoc={html}
        title="preview"
      />
    </div>
  );
};

export default CodePreview;
