import React from 'react'
import {connect} from 'react-redux'
import * as actions from 'actions'
import {withRouter} from 'react-router'
import PreferencesItem from './preferences-item'

class Preferences extends React.Component {
  onChangePreferenceComparison() {

  }

  render() {
    const {alternatives, preferences} = this.props.app

    return (
      <div>
        {preferences.map((item, index) =>
          <PreferencesItem
            key={index}
            preference={item}
            preferenceIndex={index}
            alternatives={alternatives}
            onChangePreferenceValue={this.props.onChangePreference}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  app: state.app,
})

const mapDispatchToProps = (dispatch) => ({
  onChangePreference: (comparison, index) => {
    dispatch(actions.updatePreference(comparison, index))
  },
  onWillMount: () => {
    dispatch(actions.fetchCriteria())
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Preferences))
