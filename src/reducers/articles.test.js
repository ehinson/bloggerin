import reducers from './article';

test('reducers', () => {
  let state;
  state = reducers(
    {},
    {
      type: 'ARTICLES_LIST_ADD',
      payload: {
        response: {
          '0': {
            articleTitle: 'Lorem ipsum - article one',
            articleContent: 'Here goes the content of the article'
          },
          '1': {
            articleTitle: 'Lorem ipsum - article two',
            articleContent: 'Sky is the limit, the content goes here.'
          },
          '2': {
            articleTitle: 'Lorem ipsum - article three',
            articleContent: 'Sky is the limit, the content goes here.'
          },
          '3': {
            articleTitle: 'Lorem ipsum - article four',
            articleContent: 'Here goes the content of the article'
          }
        }
      }
    }
  );
  expect(state).toEqual({
    '0': {
      articleTitle: 'Lorem ipsum - article one',
      articleContent: 'Here goes the content of the article'
    },
    '1': {
      articleTitle: 'Lorem ipsum - article two',
      articleContent: 'Sky is the limit, the content goes here.'
    },
    '2': {
      articleTitle: 'Lorem ipsum - article three',
      articleContent: 'Sky is the limit, the content goes here.'
    },
    '3': {
      articleTitle: 'Lorem ipsum - article four',
      articleContent: 'Here goes the content of the article'
    }
  });
});
