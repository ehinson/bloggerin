import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <Router history={noQueryKeyHistory}>
            {routes}
          </Router>
        </div>
      </Provider>
    );
  }
}

export default Root;
