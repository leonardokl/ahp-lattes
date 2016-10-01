import React from 'react'
import Paper from 'material-ui/Paper'
import Table from 'ui/components/table'
import ComparisonPaper from 'ui/components/comparison-paper'
import HiddenComparisonPaper from 'ui/components/hidden-comparison-paper'
import PreferenceTitle from './preferences-title'
import styles from './preferences-item.scss'

const PreferencesItem = (props) => {
  const createComparisons = () => {
    const {alternatives} = props
    const {matrix} = props.preference
    let comparisons = []

    alternatives.forEach((alternative, index) => {
      if (alternatives[index + 1]) {
        for (let i = index + 1; i < alternatives.length; i++) {
          comparisons.push({
            firstOption: {
              name: alternative.name,
              value: matrix[index][i],
              cordinate: {
                x: index,
                y: i
              }
            },
            secondOption: {
              name: alternatives[i].name,
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

  const handleChangeComparison = (comparison) => {
    props.onChangePreferenceValue(comparison, props.preferenceIndex)
  }

  return (
    <div>
      <PreferenceTitle name={props.preference.name}/>
        <div style={{margin: 20}}>
          <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {createComparisons().map((comparison, index) =>
              <ComparisonPaper
                key={index}
                comparison={comparison}
                onChangeComparison={handleChangeComparison}
              />
            )}
            <HiddenComparisonPaper />
          </div>
        </div>
    </div>
  )
  // return (
  //   <Paper className={styles.paper} zDepth={2} rounded={false}>
  //     <Table
  //       alternatives={props.alternatives}
  //       title={props.preference.name}
  //       preference={props.preference}
  //       preferenceIndex={props.preferenceIndex}
  //       onChangeSelect={props.onChangePreferenceValue}
  //     />
  //   </Paper>
  // )
}

PreferencesItem.propTypes = {
  items: React.PropTypes.array,
  onChangeSelect: React.PropTypes.func
}

PreferencesItem.defaultProps = {
  items: []
}

module.exports = PreferencesItem
