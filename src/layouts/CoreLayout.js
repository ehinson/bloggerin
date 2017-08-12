import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import routes from '../routes';
import { push } from 'react-router-redux';

export default class CoreLayout extends Component {
  static propTypes = {
    children: React.PropTypes.element
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
      <div>
        <span>
          Links:{' '}
          <Link
            to="/register"
            onClick={() => this.handleChangeUrl(store, '/register')}
          >
            Register
          </Link>{' '}
          |
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
        <br />
        {this.props.children}
      </div>
    );
  }
}
