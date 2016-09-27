import React from 'react'
import Paper from 'material-ui/Paper'
import Slider from 'material-ui/Slider'

const CriteriaItem = (props) => (
  <Paper style={{flexGrow: 1, width: 400, margin: 20,}}>
    <div style={{
        display: 'flex',
        padding: 20,
        color: 'rgb(129, 117, 117)'
      }}>
      <div style={{textAlign: 'left', width: '50%'}}>
        <strong>{props.comparison.firstOption.name}</strong>
        <div>2</div>
      </div>
      <div style={{textAlign: 'right', width: '50%'}}>
        <strong>{props.comparison.secondOption.name}</strong>
        <div>0.5</div>
      </div>
    </div>
    <div style={{paddingLeft: 10, paddingRight: 10}}>
      <Slider sliderStyle={{marginBottom: 20}}defaultValue={0.5} />
    </div>
  </Paper>
)

CriteriaItem.propTypes = {
  items: React.PropTypes.array,
  onChangeSelect: React.PropTypes.func
}

CriteriaItem.defaultProps = {
  items: []
}

module.exports = CriteriaItem
