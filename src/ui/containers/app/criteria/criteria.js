import React from 'react'
import {connect} from 'react-redux'
import * as actions from 'actions'
import {withRouter} from 'react-router'

import CriteriaItem from './criteria-item'

class Criteria extends React.Component {
  createComparisons = () => {
    const {criteria} = this.props.app
    let comparisons = []

    criteria.forEach((criterion, index) => {
      if (criteria[index + 1]) {
        for (let i = index + 1; i < criteria.length; i++) {
          comparisons.push({
            firstOption: {
              name: criterion.name
            },
            secondOption: {
              name: criteria[i].name
            }
          })
        }
      }
    })

    return comparisons
  }

  render() {
    const {criteria} = this.props.app

    return (
      <div style={{margin: 20}}>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {this.createComparisons().map((comparison, index) =>
            <CriteriaItem key={index} comparison={comparison}/>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  app: state.app,
  criteriaWeigths: state.criteriaWeights
})

const mapDispatchToProps = (dispatch) => ({
  onChangePreference: (options) => {
    dispatch(actions.updatePreference(options))
  },
  onWillMount: () => {
    dispatch(actions.fetchCriteria())
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Criteria))
