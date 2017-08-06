import React from 'react';
import Falcor from 'falcor';
import falcorModel from '../falcorModel.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class LoginView extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Login View</h1>
        FORM GOES HERE
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
