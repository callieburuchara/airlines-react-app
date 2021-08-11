import React from 'react'

const TableRow = ({ route }) => {
  return (
    <tr>
      <td>{route.airline}</td>
      <td>{route.src}</td>
      <td>{route.dest}</td>
    </tr>
  )
}

const Table = ({ routes }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Airline</th>
          <th>Source Airport</th>
          <th>Destination Airport</th>
        </tr>

        {routes.map(route => 
          <TableRow route={route} />
        )}
    
      </tbody>
    </table>
  )

}

export default Table
