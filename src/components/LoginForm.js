import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from '../styled-components/Form/InputStyledComponents';

import { BouncingButton } from '../styled-components/Form/ButtonStyledComponents';

import { RaisedButton, Paper } from 'material-ui';
import DefaultInput from './DefaultInput';

export default class LoginForm extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.props.onSubmit}>
          <h3>Log in</h3>
          <DefaultInput
            onChange={event => {}}
            name="username"
            title="Username (admin)"
            required
          />
          <DefaultInput
            onChange={event => {}}
            type="password"
            name="password"
            title="Password (password)"
            required
          />
          <div>
            <BouncingButton type="submit">Log In </BouncingButton>
          </div>
        </Form>
      </div>
    );
  }
}
