import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Falcor from 'falcor';
import falcorModel from '../falcorModel.js';
import { bindActionCreators } from 'redux';
import { LoginForm } from '../components/LoginForm.js';

class DashboardView extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Dashboard--Logged In!</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardView);
