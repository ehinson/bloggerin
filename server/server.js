import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import falcor from 'falcor';
import falcorExpress from 'falcor-express';
import falcorRouter from 'falcor-router';
import routes from './routes.js';
import path from 'path';

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

app.get('/', (req, res) => {
  Article.find((err, docs) => {
    const myArticles = docs
      .map(item => {
        return `<h2>${item.articleTitle}</h2>
      ${item.articleContent}`;
      })
      .join('<br/>');
    res.send(`<h1>Publishing App Initial Application!</h1>
      ${myArticles}`);
  });
});
// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

app.server.listen(process.env.PORT || 3001);

console.log(`Started on port ${app.server.address().port}`);
export default app;
