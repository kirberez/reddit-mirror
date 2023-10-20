export const indexTemplate = (content, token) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Training</title>
    <script src="/static/client.js" type="application/javascript"></script>
    <script>
      window.__token__ = '${token}'
    </script>
  </head>
  <body>
    <div id="root">${content}</div>
    <div id="dropdown_content"></div>
    <div id="modal_root"></div>
    <div id="post_comments"></div>
  </body>
  </html>
`;
