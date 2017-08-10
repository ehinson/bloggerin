import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ConnectedRouter, push } from 'react-router-redux';
import routes from '../routes';
import CoreLayout from '../layouts/CoreLayout';
import Bloggerin from '../layouts/Bloggerin';
import LoginView from '../views/LoginView';

export default class Root extends React.Component {
  static propTypes = {
    store: React.PropTypes.object.isRequired
  };
  handleChangeUrl = (store, url) => {
    store.dispatch(push(url));
  };
  render() {
    const store = this.props.store;
    return (
      <Provider store={store}>
        <ConnectedRouter history={this.props.history}>
          <div>
            <Router>
              <div>
                <span>
                  Links:{' '}
                  <Link
                    to="/login"
                    onClick={() => this.handleChangeUrl(store, '/login')}
                  >
                    Login
                  </Link>{' '}
                  |
                  <Link to="/" onClick={() => this.handleChangeUrl(store, '/')}>
                    Home Page
                  </Link>
                </span>
                {routes}
              </div>
            </Router>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}
