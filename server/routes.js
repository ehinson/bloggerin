import configMongoose from './configMongoose';
import sessionRoutes from './routeSession';
const Article = configMongoose.Article;

const Bloggerin = [
  ...sessionRoutes,
  {
    route: 'articles.length',
    get: () => {
      return Article.count(
        {},
        (err, count) => count
      ).then(articlesCountInDB => {
        return {
          path: ['articles', 'length'],
          value: articlesCountInDB
        };
      });
    }
  },
  {
    route: 'articles[{integers}]["id", "articleTitle", "articleContent"]',
    get: pathSet => {
      console.log(pathSet);
      const articlesIndex = pathSet[1]; //{from: 0, to: articlesLength-1} = [0,1]
      return Article.find({}, (err, docs) => docs).then(articlesArrayFromDB => {
        let results = [];
        articlesIndex.forEach(index => {
          const singleArticleObject = articlesArrayFromDB[index].toObject();
          const falcorSingleArticleResult = {
            path: ['articles', index],
            value: singleArticleObject
          };
          results.push(falcorSingleArticleResult);
        });
        return results;
      });
    }
  }
];

export default Bloggerin;
