import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from '../styled-components/Form/InputStyledComponents';
import { BouncingButton } from '../styled-components/Form/ButtonStyledComponents';
import DefaultInput from './DefaultInput';

export default class RegistrationForm extends Component {
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
            name="firstName"
            title="First Name "
            required
          />
          <DefaultInput
            onChange={event => {}}
            name="lastName"
            title="Last Name "
            required
          />
          <DefaultInput
            onChange={event => {}}
            name="email"
            title="Email "
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
            <BouncingButton type="submit">Register </BouncingButton>
          </div>
        </Form>
      </div>
    );
  }
}
