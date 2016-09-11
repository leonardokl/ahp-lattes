import React from 'react';
import Select from './select';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TableTitle from './table-title';

const MaterialTable = (props) => (
  <Table>
    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
      <TableTitle title={props.title} colSpan={(props.alternatives.length + 1)}/>
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
      {props.alternatives.map((alternative, index1) =>
        <TableRow key={index1} selectable={false}>
          <TableHeaderColumn>{alternative.name}</TableHeaderColumn>
          {props.alternatives.map((alternative, index2) =>
            <TableRowColumn key={index2}>
              <Select disabled={!!(index1 == index2)}/>
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
