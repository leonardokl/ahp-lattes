import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';
import {withRouter} from 'react-router';

import PreferencesItem from './preferences-item';

class Preferences extends React.Component {
  render() {
    const {alternatives, preferences} = this.props.app;

    return (
      <div style={{margin: 20}}>
        {preferences.map((item, index) =>
          <PreferencesItem key={index} preference={item} alternatives={alternatives}/>
        )}
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
