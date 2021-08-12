import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const findIndex = (event) => {
  return event.target.options.selectedIndex
}

const findAirNumber = (event) => {
  const id = findIndex(event)

  return event.target.options[id].getAttribute('data')
}



const Select = ({ options, currentValue, name, valueKey, titleKey, leadingText }) => {
  const dispatch = useDispatch()
  const airlineId = useSelector(state => state.filteredAirline.id)
  const airportCode = useSelector(state => state.filteredAirport.code)
  const routes = useSelector(state => state.filteredData)


  const chooseHandler = (name, event) => {
    if (name === 'airline') {
      dispatch({type: 'FILTER_BY_AIRLINE', id: findAirNumber(event), name: event.target.value})
    } else {
      dispatch({type: 'FILTER_BY_AIRPORT', code: findAirNumber(event), name: event.target.value})
    }
  }

  const isOptionDisabled = (air) => {
    if (airportCode === 0 && airlineId === 0) return false
    
    for(let i = 0; i < routes.length; i++) {
      const route = routes[i]
      if (route.airline === air.id || 
          route.src === air.code || 
          route.dest === air.code) return false
    }
    return true
  }



  return (
    <>
    {leadingText}
      <select name={name} value={currentValue} onChange={(event) => chooseHandler(name, event)}>
        <option name={currentValue}>{currentValue}</option>
        {options.map(air => <option disabled={isOptionDisabled(air)} name={air[titleKey]} data={air[valueKey]}>{air[titleKey]}</option>)}}
      </select>
    </>
  )
}

export default Select
