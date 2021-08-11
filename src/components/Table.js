import React from 'react'

const TableHeaderRow = ({ columns }) => {
  return (
    <tr>
      {columns.map(header => <th>{header.name}</th>)}
    </tr>
  )
}

const TableData = ({ rows, columns, format }) => {
  return (rows.map(row => {
    const dataCells = columns.map(column => {
      const section = column.property
      return <td>{format(section, row[section])}</td>
    })
    return <tr>{dataCells}</tr>
  })
 )
}

const Table = ({ columns, rows, format }) => { 
  return (
    <table>
      <tbody>
        <TableHeaderRow columns={columns} />
        <TableData columns={columns} rows={rows} format={format} />
      </tbody>
    </table>
  )

}

export default Table
