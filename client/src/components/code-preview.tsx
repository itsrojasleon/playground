import React from 'react';

const html = `
  <script>

  </script>
`;

const CodePreview = () => {
  return <iframe sandbox="allow-scripts" srcDoc={html} />;
};

export default CodePreview;
