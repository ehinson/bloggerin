import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({});

class Bloggerin extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        Our publishing app
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Bloggerin);
