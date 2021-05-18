// Honestly I felt weird writing down these html/javascript templates.

// Append complex/regular javascript values as
// jsx elements, arrays, objects, strings, numbers, etc.
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

// Auxiliar function to append p elements to the iframe
// it doesn't overwrite the current ui elements within the screen.
const appendFunction = `
  const appendParagraph = (value) => {
    const paragraph = document.createElement('p');
    const text = document.createTextNode(value)
    paragraph.appendChild(text)

    rootElement.appendChild(paragraph)
  }
`;

// Only works with Typescript, Javascript code
// basically to show up elements and print out messages in the console.
export const cumulativeCode = (code: string): string => {
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

// iframe html template
export const iframeHTML = `
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
