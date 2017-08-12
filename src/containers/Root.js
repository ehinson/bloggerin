import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ConnectedRouter, push } from 'react-router-redux';
import routes from '../routes';
import CoreLayout from '../layouts/CoreLayout';
import Bloggerin from '../layouts/Bloggerin';
import LoginView from '../views/LoginView';
import DashboardView from '../views/DashboardView';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { injectGlobal } from 'styled-components';

injectGlobal`
*, *::after, *::before {
  box-sizing: border-box;
}

html,
body {
  font-size: 16px;
  background: white;
  color: #333333;
  margin: 0;
  padding: 0;
  font-family: 'Zilla Slab', serif ;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
`;

injectTapEventPlugin();

export default class Root extends React.Component {
  static propTypes = {
    store: React.PropTypes.object.isRequired
  };

  render() {
    const store = this.props.store;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Provider store={store}>
          <ConnectedRouter history={this.props.history}>
            <div>
              <Router>
                <CoreLayout store={store}>
                  <div>
                    <Route component={Bloggerin} exact path="/" name="home" />
                    <Route
                      component={LoginView}
                      exact
                      path="/login"
                      name="login"
                    />
                    <Route
                      component={DashboardView}
                      exact
                      path="/dashboard"
                      name="dashboard"
                    />
                  </div>
                </CoreLayout>
              </Router>
            </div>
          </ConnectedRouter>
        </Provider>
      </MuiThemeProvider>
    );
  }
}
