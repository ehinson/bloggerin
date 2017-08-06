import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import articleReducer from './reducers/article';
import Bloggerin from './layouts/Bloggerin';

const store = createStore(articleReducer)

render(
  <Provider store={store}>
  <Bloggerin/>
</Provider>, document.getElementById('root'));
