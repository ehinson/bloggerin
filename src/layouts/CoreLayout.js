import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import routes from '../routes';
import { push } from 'react-router-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { green100, green500, green700 } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme(
  {
    palette: {
      primary1Color: green500,
      primary2Color: green700,
      primary3Color: green100
    }
  },
  {
    avatar: {
      borderColor: null
    },
    userAgent: 'all'
  }
);

class CoreLayout extends Component {
  static propTypes = {
    children: PropTypes.element
  };

  constructor(props) {
    super(props);

    this.state = {};
  }
  handleChangeUrl = (store, url) => {
    store.dispatch(push(url));
  };
  render() {
    const store = this.props.store;
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <span>
            Links: <Link to="/register">Register</Link> |
            <Link to="/login">Login</Link> |
            <Link to="/">Home Page</Link>
          </span>
          <br />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default CoreLayout;
