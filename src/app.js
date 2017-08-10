import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import Root from './containers/Root';
import configureStore from './store/configureStore';

export const history = createHistory();
const target = document.getElementById('root');

export const store = configureStore(window.__INITIAL_STATE__);
const node = <Root history={history} store={store} />;

ReactDOM.render(node, target);
