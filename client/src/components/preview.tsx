import React, { useEffect, useRef } from 'react';
import { iframeHTML } from 'utils/template';
// don't use css modules on this file because it's using a special class name to refer the
// react-resizable element
import './styles/preview.sass';

interface PreviewProps {
  code: string;
  err: string;
}

const Preview: React.FC<PreviewProps> = ({ code, err }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!iframeRef.current) return;

    // If for some crazy reason the user writes down `document.body.innertHTML = '';`
    // this will recreate the default ui for an OK behaviour
    iframeRef.current.srcdoc = iframeHTML;

    const timer = window.setTimeout(() => {
      iframeRef.current!.contentWindow?.postMessage(code, '*');
    }, 50);

    return () => {
      window.clearTimeout(timer);
    };
  }, [code]);

  return (
    <div className="preview-wrapper">
      <iframe
        ref={iframeRef}
        sandbox="allow-scripts"
        srcDoc={iframeHTML}
        title="preview"
      />
      {err && <div className="preview-err">{err}</div>}
    </div>
  );
};

export default Preview;
