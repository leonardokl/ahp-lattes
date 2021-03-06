import React from 'react'
import {connect} from 'react-redux'
import * as actions from 'actions'
import {withRouter} from 'react-router'

import CriteriaItem from './criteria-item'
import Ghost from './ghost'

class Criteria extends React.Component {
  createComparisons = () => {
    const criteria = this.props.criteria.data
    const {matrix} = this.props.criteriaWeigths
    let comparisons = []

    criteria.forEach((criterion, index) => {
      if (criteria[index + 1]) {
        for (let i = index + 1; i < criteria.length; i++) {
          comparisons.push({
            firstOption: {
              name: criterion.name,
              value: matrix[index][i],
              cordinate: {
                x: index,
                y: i
              }
            },
            secondOption: {
              name: criteria[i].name,
              value: matrix[i][index],
              cordinate: {
                x: i,
                y: index
              }
            }
          })
        }
      }
    })

    return comparisons
  }

  render() {
    return (
      <div style={{margin: 20}}>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {this.createComparisons().map((comparison, index) =>
            <CriteriaItem
              key={index}
              comparison={comparison}
              onChangeComparison={this.props.onChangeCriteriaWeigth}
            />
          )}
          <Ghost />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  criteria: state.criteria,
  criteriaWeigths: state.criteriaWeigths
})

const mapDispatchToProps = (dispatch) => ({
  onChangeCriteriaWeigth: (criteriaComparison) => {
    dispatch(actions.updateCriteriaWeigth(criteriaComparison))
  },
  onChangePreference: (options) => {
    dispatch(actions.updatePreference(options))
  },
  onWillMount: () => {
    dispatch(actions.fetchCriteria())
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Criteria))
