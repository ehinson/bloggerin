const articleMock = {
  '987654': {
    articleTitle: 'Lorem ipsum - article one',
    articleContent: 'Here goes the content of the article'
  },
  '123456': {
    articleTitle: 'Lorem ipsum - article two',
    articleContent: 'Sky is the limit, the content goes here.'
  }
};

const articleReducer = (state = articleMock, action) => {
  switch (action.type) {
    case 'RETURN_ALL_ARTICLES':
      return Object.assign({}, state)

    default:
      return state

  }
}

export default articleReducer
