import React from 'react'
import Paper from 'material-ui/Paper'
import Slider from 'material-ui/Slider'

const ComparisonPaper = (props) => {
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

  const getFirstOptionsValue = () => {
    const {value} = props.comparison.firstOption
    const firstOptionValue = value >= 1 ? value : `1/${props.comparison.secondOption.value}`

    return firstOptionValue
  }

  const getSecondOptionsValue = () => {
    const {value} = props.comparison.secondOption
    const secondOptionValue = value >= 1 ? value : `1/${props.comparison.firstOption.value}`

    return secondOptionValue
  }

  return(
    <Paper style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1, width: 400, margin: 20}}>
      <div style={{
          display: 'flex',
          padding: 20,
          color: 'rgb(129, 117, 117)',
          fontSize: 14
        }}>
        <div style={{textAlign: 'center', width: '50%'}}>
          <strong>{props.comparison.firstOption.name}</strong>
        </div>
        <div style={{textAlign: 'center', width: '50%'}}>
          <strong>{props.comparison.secondOption.name}</strong>
        </div>
      </div>
      <div
        style={{
        display: 'flex',
        textAlign: 'center',
        color: '#817575',
        fontSize: 30,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20
      }}>
        <div style={{width: '50%'}}><strong>{getFirstOptionsValue()}</strong></div>
        <div style={{width: '50%'}}><strong>{getSecondOptionsValue()}</strong></div>
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

module.exports = ComparisonPaper
