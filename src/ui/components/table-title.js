import React from 'react';
import {Table, TableHeaderColumn, TableRow} from 'material-ui/Table';

const TableTitle = (props) => (
  <TableRow>
    <TableHeaderColumn
      colSpan={props.colSpan}
      style={{textAlign: 'center', fontSize: '18px'}}
    >
      <strong>{props.title}</strong>
    </TableHeaderColumn>
  </TableRow>
);

TableTitle.propTypes = {
  colSpan: React.PropTypes.number,
  title: React.PropTypes.string,
};

TableTitle.defaultProps = {
  title: '--'
};

module.exports = TableTitle;
