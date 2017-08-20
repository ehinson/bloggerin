import http from 'http';
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
import { renderToStaticMarkup } from 'react-dom/server';
import ReactRouter from 'react-router';
import { StaticRouter } from 'react-router';
import * as hist from 'history';
import rootReducer from '../src/reducers';
import reactRoutes from '../src/routes';
import fetchServerSide from './fetchServerSide';
import Root from '../src/containers/Root';
import { ConnectedRouter, push } from 'react-router-redux';

const app = express();
app.server = http.createServer(app);

app.use(cors());
app.use(bodyParser.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));

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

const model = new falcor.Model({ cache: cache });

app.use(
  '/model.json',
  falcorExpress.dataSourceRoute((req, res) => {
    return new falcorRouter(routes);
  })
);

app.use(express.static('dist'));

let handleServerSideRender = (req, res) => {
  let initMOCKstore = fetchServerSide();
  let context = {};
  const store = createStore(rootReducer, initMOCKstore);
  const memoryHistory = hist.createMemoryHistory();
  // Render the component to a string
  const html = renderToStaticMarkup(
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

  // Grab the initial state from our Redux store
  const preloadedState = store.getState();
  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    });
    res.end();
  } else {
    // res.write(`
    //   <!doctype html>
    //   <div id="root">${html}</div>
    // `);
    // res.end();
    res.send(renderFullHtml(html, preloadedState));
  }

  // Send the rendered page back to the client
};

let renderFullHtml = (html, initialState) => {
  return `
    <!doctype html>
    <html>
    <head>
    <title>Bloggerin Server Side Rendering</title>
    <link href="https://fonts.googleapis.com/css?family=Zilla+Slab:300,400" rel="stylesheet">
    <link href="https://cdn.quilljs.com/1.3.0/quill.snow.css" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <body>
    <h1>Server side publishing app</h1>
    <div id="root">${html}</div>
    <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState).replace(
      /</g,
      '\\u003c'
    )}</script>
    <script src="app.js"></script>
    </body>
    </html>
`;
};
app.use(handleServerSideRender);

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
//
// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '.dist/index.html'));
// });

app.server.listen(process.env.PORT || 3001);

console.log(`Started on port ${app.server.address().port}`);
export default app;
