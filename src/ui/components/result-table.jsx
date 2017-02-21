import React, { PropTypes } from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'

const Row = ({label, value, displayBorder}) => (
  <TableRow displayBorder={displayBorder}>
    <TableRowColumn>{label}</TableRowColumn>
    <TableRowColumn>{value}</TableRowColumn>
  </TableRow>
)

const ResultTable = ({data}) => (
  <Table selectable={false}>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn>Nome</TableHeaderColumn>
        <TableHeaderColumn>Pontuação</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map((data, index) =>
        <Row {...data} key={index} displayBorder={index !== (data.length - 1)}/>
      )}
    </TableBody>
  </Table>
)

ResultTable.propTypes = {
  data: PropTypes.array
}

export default ResultTable
