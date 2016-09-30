import React from 'react'
import Paper from 'material-ui/Paper'
import Slider from 'material-ui/Slider'

const CriteriaItem = (props) => {
  const getBiggestOption = () => {
    const {firstOption, secondOption} = props.comparison

    if (firstOption.value > secondOption.value)
      return 'firstOption'
    if (secondOption.value > firstOption.value)
      return 'secondOption'
  }

  const getSliderValue = () => {
    const {firstOption, secondOption} = props.comparison
    const biggestOption = getBiggestOption()
    const DEFAULT_VALUE = 9

    switch (biggestOption) {
      case 'firstOption':
        return firstOption.value + 8
      case 'secondOption':
        return 10 - secondOption.value
      default:
        return DEFAULT_VALUE
    }
  }

  const getDefaultComparison = () => ({
    firstOption: {
      ...props.comparison.firstOption,
      value: 1
    },
    secondOption: {
      ...props.comparison.secondOption,
      value: 1
    }
  })

  const getOptionsValuesBySliderValue = (value) => {
    if (value < 9) {
      return ({
        firstOption: 1 / (10 - value),
        secondOption: 10 - value
      })
    }

    if (value === 9) {
      return ({
        firstOption: 1,
        secondOption: 1
      })
    }

    if (value > 9) {
      return ({
        firstOption: value - 8,
        secondOption: 1 / (value - 8)
      })
    }
  }

  const getComparisonWhenFirstOptionWins = (value) => ({
    firstOption: {
      ...props.comparison.firstOption,
      value: value - 8
    },
    secondOption: {
      ...props.comparison.secondOption,
      value: 1 / (value - 8)
    }
  })

  const getComparisonWhenSecondOptionWins = (value) => ({
    firstOption: {
      ...props.comparison.firstOption,
      value: 1 / (10 - value)
    },
    secondOption: {
      ...props.comparison.secondOption,
      value: 10 - value
    }
  })

  const handleChangeSlider = (evt, value) => {
    let comparison

    if (value < 9) {
      comparison = getComparisonWhenSecondOptionWins(value)
    }

    if (value === 9) {
      comparison = getDefaultComparison()
    }

    if (value > 9) {
      comparison = getComparisonWhenFirstOptionWins(value)
    }

    props.onChangeComparison(comparison)
  }

  return(
    <Paper style={{flexGrow: 1, width: 400, margin: 20,}}>
      <div style={{
          display: 'flex',
          padding: 20,
          color: 'rgb(129, 117, 117)'
        }}>
        <div style={{textAlign: 'left', width: '50%'}}>
          <strong>{props.comparison.firstOption.name}</strong>
          <div>{props.comparison.firstOption.value}</div>
        </div>
        <div style={{textAlign: 'right', width: '50%'}}>
          <strong>{props.comparison.secondOption.name}</strong>
          <div>{props.comparison.secondOption.value}</div>
        </div>
      </div>
      <div style={{paddingLeft: 10, paddingRight: 10}}>
        <Slider
          min={1}
          max={17}
          step={1}
          sliderStyle={{marginBottom: 20}}
          value={getSliderValue()}
          onChange={handleChangeSlider}
        />
      </div>
    </Paper>
  )
}

module.exports = CriteriaItem
