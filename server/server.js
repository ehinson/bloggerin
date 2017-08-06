import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/bloggerin', {
  useMongoClient: true,
})

const articleSchema = {
  articleTitle:String,
  articleContent:String
};

const Article = mongoose.model('Article', articleSchema, 'articles');

const app = express();
app.server = http.createServer(app);

app.use(cors());
app.use(bodyParser.json({extended: false}));
app.use(express.static('dist'));

app.get('/', (req, res) => {
  Article.find((err, docs) => {
    const myArticles = docs.map(item => {
      return `<h2>${item.articleTitle}</h2>
      ${item.articleContent}`
    }).join('<br/>')
    res.send(`<h1>Publishing App Initial Application!</h1>
      ${myArticles}`)
  })
});

app.server.listen(process.env.PORT || 3000);

console.log(`Started on port ${app.server.address().port}`);
export default app;
