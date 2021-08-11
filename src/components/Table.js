import React, {useState} from 'react'

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
  const [start, setStart] = useState(0)
  const [prevDisabled, setPrevDisabled] = useState(true)
  const [nextDisabled, setNextDisabled] = useState(false)

  const rowsToDisplay = () => {
    return rows.slice(start, start + perPage)
  }

  const handleDisablings = () => {
    if (start > 0 && (start + perPage) < 850) {
      setPrevDisabled(false)
      setNextDisabled(false)
     } else if (start <= 0) {
       setPrevDisabled(true)
     } else {
       setNextDisabled(true)
     }
  }

  const handlePageButtons = (event) => {
    //console.log(event.target.innerHTML)
    if (event.target.innerHTML.includes('Previous')) {
      setStart(start - perPage)
    } else {
      console.log(start, perPage)
      setStart(start + perPage)
      console.log("NEXT BEING CLICKED", start)
    }

    console.log("DISABLE", start)
    handleDisablings()
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
     <button disabled={prevDisabled} onClick={(event) => handlePageButtons(event)}>Previous Page</button>
     <button disabled={nextDisabled} onClick={(event) => handlePageButtons(event)}>Next Page</button>
    </>
  )
}

export default Table
