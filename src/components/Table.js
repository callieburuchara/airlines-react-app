import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

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

const Table = ({ columns, rows, format, perPage }) => { 
  const start = useSelector(state => state.start)
  const dispatch = useDispatch()

  const prevDisabled = () => start === 0
  const nextDisabled = () => start === rows.length - perPage

  const rowsToDisplay = () => {
    return rows.slice(start, start + perPage)
  }

  const handlePageButtons = (event) => {
    if (event.target.innerHTML.includes('Previous')) {
      dispatch({type:'DECREASE_START', amount: perPage})
    } else {
      dispatch({type:'INCREASE_START', amount: perPage})
    }
  }

  return (
    <>
      <table>
        <tbody>
          <TableHeaderRow columns={columns} />
          <TableData columns={columns} rows={rowsToDisplay()} format={format} />
        </tbody>
      </table>
      <br/>

     <footer>Showing {start + 1}-{start + perPage} of {rows.length} routes.</footer>
     <button disabled={prevDisabled()} onClick={(event) => handlePageButtons(event)}>Previous Page</button>
     <button disabled={nextDisabled()} onClick={(event) => handlePageButtons(event)}>Next Page</button>
    </>
  )
}

export default Table
