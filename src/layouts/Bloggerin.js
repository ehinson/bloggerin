import React from 'react';
import { connect } from 'react-redux';
import falcorModel from '../falcorModel.js';
import { bindActionCreators } from 'redux';
import articleActions from '../actions/article.js';
import {
  GridItem,
  GridContainer,
  Snippet
} from '../styled-components/Article/ArticleStyledComponents';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  articleActions: bindActionCreators(articleActions, dispatch)
});

class Bloggerin extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    if (typeof window !== 'undefined') {
      this._fetch(); // we are server side rendering, no fetching
    }
  }
  async _fetch() {
    const articlesLength = await falcorModel
      .getValue('articles.length')
      .then(length => length);
    const articles = await falcorModel
      .get([
        'articles',
        {
          from: 0,
          to: articlesLength - 1
        },
        ['id', 'articleTitle', 'articleContent']
      ])
      .then(articleResponse => {
        return articleResponse.json.articles;
      });
    console.log(articles);
    this.props.articleActions.articlesList(articles);
  }
  render() {
    let articlesJSX = [];
    for (let articleKey in this.props.article) {
      const articleDetails = this.props.article[articleKey];
      const currentArticleJSX = (
        <GridItem key={articleKey}>
          <Snippet>
            {articleDetails.articleContent}
          </Snippet>
          <h2 className="title title--preview">
            <a href="/article">
              {' '}{articleDetails.articleTitle}
            </a>
          </h2>
          <div className="meta meta--preview">
            <span className="meta__date">
              <i className="fa fa-calendar-o" /> Date
            </span>
          </div>
        </GridItem>
      );
      articlesJSX.push(currentArticleJSX);
    }
    return (
      <div>
        <h1>Our publishing app</h1>
        <GridContainer>
          {articlesJSX}
        </GridContainer>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Bloggerin);
