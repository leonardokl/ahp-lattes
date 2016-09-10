import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';
import {withRouter} from 'react-router';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Alternatives from './alternatives';
import Sidebar from 'ui/components/sidebar';
import Results from './results';
import styles from './home.scss';

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Alternatives alternatives={this.props.app.alternatives}/>
        <Results results={this.props.app.results}/>
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
