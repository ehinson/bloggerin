import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Formsy from 'formsy-react';
import { Form } from '../styled-components/FormStyledComponents';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  FormsyCheckbox,
  FormsyDate,
  FormsyRadio,
  FormsyRadioGroup,
  FormsySelect,
  FormsyText,
  FormsyTime,
  FormsyToggle,
  FormsyAutoComplete
} from 'formsy-material-ui/lib';
import { RaisedButton, Paper } from 'material-ui';
import DefaultInput from './DefaultInput';

export default class LoginForm extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log('PROPS', this.props);
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Form onSubmit={this.props.onSubmit}>
            <Paper zDepth={1} style={{ padding: 32 }}>
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
              <div style={{ marginTop: 24 }}>
                <RaisedButton
                  secondary={true}
                  type="submit"
                  style={{
                    margin: '0 auto',
                    display: 'block',
                    width: 150
                  }}
                  label={'Log in'}
                />
              </div>
            </Paper>
          </Form>
        </MuiThemeProvider>
      </div>
    );
  }
}
