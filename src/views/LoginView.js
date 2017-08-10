import React from 'react';
import Falcor from 'falcor';
import falcorModel from '../falcorModel.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
const mapStateToProps = state => ({
  ...state
});
// You can add your reducers here
const mapDispatchToProps = dispatch => ({});
class LoginView extends React.Component {
  render() {
    return (
      <div>
        <h1>Login view</h1>
        FORM GOES HERE
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
