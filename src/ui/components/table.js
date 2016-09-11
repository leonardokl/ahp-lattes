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
              <Select
                disabled={!!(index1 == index2)}
                value={props.preference.matrix[index1][index2]}
                onChange={(evt, index, value) => props.onChangeSelect({
                  value,
                  cordinates: {
                    x: index1,
                    y: index2
                  },
                  index: props.preferenceIndex
                })}
              />
            </TableRowColumn>
          )}
        </TableRow>
      )}
    </TableBody>
  </Table>
);

MaterialTable.propTypes = {
  alternatives: React.PropTypes.array,
  preference: React.PropTypes.object,
};

module.exports = MaterialTable;
