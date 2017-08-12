import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HOC } from 'formsy-react';
import {
  TextField,
  TextLabel,
  TextContainer,
  LabelBefore,
  LabelContent
} from '../styled-components/FormStyledComponents';

class DefaultInput extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = { currentText: null, inputFilled: false };
  }
  changeValue = e => {
    this.setState({ currentText: e.target.value });
    this.props.setValue(e.target.value);

    this.props.onChange(e);
  };
  handleInputFocus = e => {
    this.setState({ inputFilled: true });
  };
  handleInputBlur = e => {
    this.setState({ inputFilled: false });
  };
  render() {
    return (
      <div>
        <TextContainer>
          <TextLabel for="username">
            <LabelBefore filled={this.state.inputFilled}>
              <i className="fa fa-user-circle" aria-hidden="true" />
            </LabelBefore>
            <LabelContent filled={this.state.inputFilled}>
              {this.props.name}{' '}
            </LabelContent>
          </TextLabel>
          <br />
          <TextField
            ref={input => {
              this.textfield = input;
            }}
            name={this.props.name}
            onChange={this.changeValue}
            onFocus={this.handleInputFocus}
            onBlur={this.handleInputBlur}
            required={this.props.required}
            type={this.props.type}
            value={
              this.state.currentText ? this.state.currentText : this.props.value
            }
            id={this.props.name}
            defaultValue={this.props.defaultValue}
          />
        </TextContainer>

        {this.props.children}
      </div>
    );
  }
}

export default HOC(DefaultInput);
