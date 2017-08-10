import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class CoreLayout extends Component {
  static propTypes = {
    children: React.PropTypes.element
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <span>
          Links: <Link to="/login">Login</Link> |
          <Link to="/">Home Page</Link>
        </span>
        <br />
        {this.props.children}
      </div>
    );
  }
}
