import React, { useEffect, useRef } from 'react';
// don't use css modules on this file because it's using a special class name to refer the
// react-resizable element
import './preview.sass';

interface PreviewProps {
  code: string;
}

const Preview: React.FC<PreviewProps> = ({ code }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const html = `
    <html>
      <head>
        <style>
          html {background-color: white;}
          body {font-family: Arial, Helvetica, sans-serif;}
        </style>
      </head>
      <body>
        <div id="root"></div>
        <script>
          const handleError = (err) => {
            const root = document.getElementById('root');
            root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>'
            console.error(err);
          }

          window.addEventListener('error', (event) => {
            event.preventDefault();
            handleError(event.error);
          });

          window.addEventListener('message', (event) => {
            try {
              eval(event.data);
            } catch(err) {
              handleError(err);
            } 
          }, false)
        </script>
      </body>
    </html>
  `;

  useEffect(() => {
    if (!iframeRef.current) {
      return;
    }

    iframeRef.current.srcdoc = html;

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
        srcDoc={html}
        title="preview"
      />
    </div>
  );
};

export default Preview;
