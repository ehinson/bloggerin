import React from 'react';
import Falcor from 'falcor';
import falcorModel from '../falcorModel.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RegistrationForm from '../components/RegistrationForm.js';
import { Snackbar } from 'material-ui';
import { push } from 'react-router-redux';
import history from 'history';
import { store } from '../app';

const mapStateToProps = state => ({
  ...state
});

// You can add your reducers here
const mapDispatchToProps = dispatch => ({});

class RegistrationView extends React.Component {
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
    this.state = {
      error: null
    };
  }
  async register(newUserModel) {
    console.info('newUserModel', newUserModel);
    await falcorModel.call(['register'], [newUserModel]).then(result => {
      return result;
    });
    const newUserId = await falcorModel.getValue(['register', 'newUserId']);
    if (newUserId === 'INVALID') {
      const errorRes = await falcorModel.getValue('register.error');
      this.setState({ error: errorRes });
      return;
    }
    this.props.history.push('/login');

    store.dispatch(push('/login'));
  }

  render() {
    return (
      <div>
        <h1>Registration View</h1>
        <div>
          <RegistrationForm onSubmit={this.register} />
        </div>
        <Snackbar
          autoHideDuration={4000}
          open={!!this.state.error}
          message={this.state.error || ''}
          onRequestClose={() => null}
        />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationView);
