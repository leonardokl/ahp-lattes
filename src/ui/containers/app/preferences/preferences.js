import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';
import {withRouter} from 'react-router';
import AppBar from 'material-ui/AppBar';
import PreferencesItem from './preferences-item';

class Preferences extends React.Component {
  render() {
    return (
      <div style={{margin: 20}}>
        {[1,2,3,4].map(item => <PreferencesItem key={item}/>)}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Preferences));
