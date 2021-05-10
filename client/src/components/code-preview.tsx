import React, { useEffect, useRef } from 'react';
import { html } from '../utils/preview';

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
    <iframe
      ref={iframeRef}
      sandbox="allow-scripts"
      srcDoc={html}
      title="preview"
    />
  );
};

export default CodePreview;
