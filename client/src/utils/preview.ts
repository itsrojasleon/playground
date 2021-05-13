export const html = `
  <html>
  <head>
    <style>
      html {background-color: white;}
    </style>
  </head>
  <body>
    <div id="root"></div>
    <button>hello</button>
    <script>
      const handleError = (err) => {
        const root = document.querySelector('#root');
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
