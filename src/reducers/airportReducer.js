import DATA from '../data'

const airportReducer = (state = {name: "All Airports", list: DATA.airports, code: 0}, action) => {
  switch (action.type) {
    case 'RESET':
      return {name: "All Airports", list: DATA.airports, code: 0}
    case 'FILTER_BY_AIRPORT':
      return {name: action.name, list: DATA.airports, code: action.code}
    default:
      return state
  }
}

export default airportReducer
