import falcor from 'falcor'
import FalcorDataSource from 'falcor-http-datasource'


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
}

const model = new falcor.Model({
  'cache': cache
})

export default model
