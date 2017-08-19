import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppTest from './AppTest';
import Root from './containers/Root';
import createHistory from 'history/createBrowserHistory';
import configureStore from './store/configureStore';
import { ConnectedRouter } from 'react-router-redux';

if (typeof window !== 'undefined') {
  const history = createHistory();

  const store = configureStore(window.__PRELOADED_STATE__);
  delete window.__PRELOADED_STATE__;

  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Root />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );
}
