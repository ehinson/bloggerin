import React from 'react';
import { connect } from 'react-redux';
import falcorModel from '../falcorModel.js';
import { bindActionCreators } from 'redux';
import articleActions from '../actions/article.js';

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
    this._fetch();
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
        <div key={articleKey}>
          <h2>
            {articleDetails.articleTitle}
          </h2>
          <h3>
            {articleDetails.articleContent}
          </h3>
        </div>
      );
      articlesJSX.push(currentArticleJSX);
    }
    return (
      <div>
        <h1>Our publishing app</h1>
        {articlesJSX}
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Bloggerin);
