import DATA from '../data'

const airportReducer = (state = {name: "All Airports", list: DATA.airports}, action) => {
  switch (action.type) {
    case 'RESET':
      return {name: "All Airports", list: DATA.airports}
    case 'FILTER_BY_AIRPORT':
      return {name: action.name, list: DATA.airports}
    default:
      return state
  }
}

export default airportReducer
