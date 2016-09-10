import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';
import {withRouter} from 'react-router';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import Sidebar from 'ui/components/sidebar';

class App extends React.Component {
  render() {
    return (
      <div style={{margin: 20}}>
        <Paper style={{height: 100}} zDepth={1} rounded={false} />
        <Paper style={{height: 100}} zDepth={1} rounded={false} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  app: state.app,
});

const mapDispatchToProps = (dispatch) => ({
  onWillMount: () => {
    dispatch(actions.fetchCriteria());
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
