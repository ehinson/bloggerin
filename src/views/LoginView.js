import React from 'react';
import Falcor from 'falcor';
import falcorModel from '../falcorModel.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginForm from '../components/LoginForm.js';
import { Snackbar } from 'material-ui';
import { push } from 'react-router-redux';
import history from 'history';
import { store } from '../app';

const mapStateToProps = state => ({
  ...state
});

// You can add your reducers here
const mapDispatchToProps = dispatch => ({});

class LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.state = {
      error: null
    };
  }

  async login(credentials) {
    console.info('credentials', credentials);
    await falcorModel.call(['login'], [credentials]).then(result => {
      console.log(result);
      return result;
    });
    const tokenRes = await falcorModel.getValue('login.token');
    if (tokenRes === 'INVALID') {
      const errorRes = await falcorModel.getValue('login.error');
      this.setState({
        error: errorRes
      });
      return;
    }
    if (tokenRes) {
      const username = await falcorModel.getValue('login.username');
      const role = await falcorModel.getValue('login.role');

      localStorage.setItem('token', tokenRes);
      localStorage.setItem('username', username);
      localStorage.setItem('role', role);

      this.props.history.push('/dashboard');

      store.dispatch(push('/dashboard'));
    }
    return;
  }
  render() {
    return (
      <div>
        <h1>Login view</h1>
        <div>
          <LoginForm onSubmit={this.login} />
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
export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
