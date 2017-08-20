import http, { createServer } from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import falcor from 'falcor';
import falcorExpress from 'falcor-express';
import falcorRouter from 'falcor-router';
import routes from './routes.js';
import path from 'path';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOMServer, { renderToStaticMarkup } from 'react-dom/server';
import ReactRouter, { StaticRouter } from 'react-router';
import { match } from 'react-router-dom';
import * as hist from 'history';
import rootReducer from '../src/reducers';
import reactRoutes from '../src/routes';
import fetchServerSide from './fetchServerSide';
import Root from '../src/containers/Root';
import AppTest from '../src/AppTest';
import devToolsEnhancer from 'remote-redux-devtools';

const app = express();
// app.server = createServer(app);

app.use(cors());
app.use(bodyParser.json({ extended: false }));

app.use(bodyParser.urlencoded({ extended: false }));
// app.use('/static', express.static(path.join(__dirname, 'dist')));
let cache = {
  articles: [
    {
      id: 987654,
      articleTitle: 'Lorem ipsum - article one',
      articleContent: 'Here goes the content of the article'
    },
    {
      id: 123456,
      articleTitle: 'Lorem ipsum - article two from backend',
      articleContent: 'Sky is the limit, the content goes here.'
    }
  ]
};

const model = new falcor.Model({
  cache: cache
});

app.use(
  '/model.json',
  falcorExpress.dataSourceRoute((req, res) => {
    return new falcorRouter(routes);
  })
);
app.use(express.static('dist'));

function handleServerRender(req, res) {
  const context = {};
  const memoryHistory = hist.createMemoryHistory();
  let initMOCKstore = fetchServerSide();
  const store = createStore(rootReducer, initMOCKstore, devToolsEnhancer());

  const html = ReactDOMServer.renderToStaticMarkup(
    <Provider store={store}>
      <StaticRouter
        location={req.url}
        context={context}
        history={memoryHistory}
      >
        <Root />
      </StaticRouter>
    </Provider>
  );
  const initialState = store.getState();

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    });
    res.end();
  } else {
    res.write(renderFullPage(html, initialState));
    res.end();
  }
}
function renderFullPage(html, initialState) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Bloggerin ServerRendering</title>
        <link href="https://fonts.googleapis.com/css?family=Zilla+Slab:300,400" rel="stylesheet">
        <link href="https://cdn.quilljs.com/1.3.0/quill.snow.css" rel="stylesheet">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(initialState).replace(
            /</g,
            '\\u003c'
          )}
        </script>
        <script src="app.js"></script>
      </body>
    </html>
    `;
}

// app.get('/', (req, res) => {
//   Article.find((err, docs) => {
//     const myArticles = docs
//       .map(item => {
//         return `<h2>${item.articleTitle}</h2>
//       ${item.articleContent}`;
//       })
//       .join('<br/>');
//     res.send(`<h1>Publishing App Initial Application!</h1>
//       ${myArticles}`);
//   });
// });
// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });
app.use(handleServerRender);

app.listen(process.env.PORT || 3003);
// console.log(`Started on port ${app.server.address().port}`);
export default app;
