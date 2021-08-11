import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const findIndex = (event) => {
  return event.target.options.selectedIndex
}

const findAirlineId = (event) => {
  const id = findIndex(event)

  return event.target.options[id].getAttribute('data')
}


const Select = ({ options, allTitle, name, valueKey, titleKey }) => {
  const dispatch = useDispatch()

  const chooseHandler = (name, event) => {
    if (name === 'airline') {
      dispatch({type: 'FILTER_BY_AIRLINE', id: findAirlineId(event)})
    } else {
      dispatch({type: 'FILTER_BY_AIRPORT', code: ''})
    }
  }


  return (
    <>
      <br/><br/>
        Show routes on
        <select name={name} onChange={(event) => chooseHandler(name, event)}>
          <option name={allTitle}>{allTitle}</option>
          {options.map(air => <option name={air[titleKey]} data={air[valueKey]}>{air[titleKey]}</option>)}}
        </select>
      <br/><br/>
    </>
  )
}

export default Select
