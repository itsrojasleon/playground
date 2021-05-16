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

export const markdownCumulativeCode = (code: string): string => {
  return `
    import marked from 'marked';

    ${code}
  `;
};
