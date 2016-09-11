import React from 'react';
import Select from './select';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const MaterialTable = (props) => (
  <Table>
    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
      <TableRow>
        <TableHeaderColumn
          colSpan={props.alternatives.length + 1}
          style={{textAlign: 'center', fontSize: '18px'}}
        >
          <strong>{props.title}</strong>
        </TableHeaderColumn>
      </TableRow>
      <TableRow>
        <TableHeaderColumn></TableHeaderColumn>
        {props.alternatives.map((alternative, index) =>
          <TableHeaderColumn index={index}>
            {alternative.name}
          </TableHeaderColumn>
        )}
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      {props.alternatives.map((alternative, index) =>
        <TableRow key={index} selectable={false}>
          <TableHeaderColumn>{alternative.name}</TableHeaderColumn>
          {props.alternatives.map((alternative, index) =>
            <TableRowColumn key={index}>
              <Select />
            </TableRowColumn>
          )}
        </TableRow>
      )}
    </TableBody>
  </Table>
);

MaterialTable.propTypes = {
  items: React.PropTypes.array,
};

MaterialTable.defaultProps = {
  items: []
};

module.exports = MaterialTable;
