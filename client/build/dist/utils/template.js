const renderFunction = `
  const render = (value) => {
    if (typeof value === 'object') {
      if (value.$$typeof && value.props) {
        jsxElements.push(value);
        const App = () => jsxElements.map(el => el)
        _ReactDOM.render(<App />, rootElement);
      } else {
        appendParagraph(JSON.stringify(value));
      }
    } else {
      appendParagraph(value);
    }
  }
`;
const appendFunction = `
  const appendParagraph = (value) => {
    const paragraph = document.createElement('p');
    const text = document.createTextNode(value)
    paragraph.appendChild(text)

    rootElement.appendChild(paragraph)
  }
`;
export const cumulativeCode = (code) => {
  return `
    import _React from 'react';
    import _ReactDOM from 'react-dom';

    const jsxElements = []
    const rootElement = document.getElementById('root');
    ${renderFunction}
    ${appendFunction}
    ${code}
  `;
};
export const iframeHTML = `
  <html>
  <head>
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        background-color: #141618;
        color: white;
      }
      
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
