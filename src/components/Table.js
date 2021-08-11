import React from 'react'
import DATA from '../data.js'

const TableRow = ({ route }) => {
  return (
    <tr>
      <td>{DATA.getAirlineById(route.airline)}</td>
      <td>{DATA.getAirportByCode(route.src)}</td>
      <td>{DATA.getAirportByCode(route.dest)}</td>
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
