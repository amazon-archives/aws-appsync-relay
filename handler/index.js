'use strict';

exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: '200',
    body: `<!doctype html5>
           <html>
            <body>
             <script>
               APPSYNC_CONFIG = ${process.env.APPSYNC_CONFIG.trim()};
             </script>
             <script src="${process.env.BUNDLE_URL}"></script>
            </body>
           </html>`,
    headers: {
      'Content-Type': 'text/html'
    },
  });
};
