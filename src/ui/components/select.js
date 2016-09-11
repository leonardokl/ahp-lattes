import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const options = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9',
  '1/2', '1/3', '1/4', '1/5', '1/6', '1/7', '1/8', '1/9',
];

const Select = (props) => (
  <SelectField value={props.value} onChange={props.onChange}>
    {options.map((value, index) =>
      <MenuItem key={index} value={value} primaryText={value} />
    )}
  </SelectField>
);

Select.propTypes = {
  onChange: React.PropTypes.func,
};

Select.defaultProps = {
  value: '1',
  onChange: () => 1
};

module.exports = Select;
