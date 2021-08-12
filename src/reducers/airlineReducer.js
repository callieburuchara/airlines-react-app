import DATA from '../data'

const airlineReducer = (state = {name: "All Airlines", list: DATA.airlines}, action) => {
  switch (action.type) {
    case 'RESET':
      return {name: "All Airlines", list: DATA.airlines}
    case 'FILTER_BY_AIRLINE':
      return {name: action.name, list: DATA.airlines}
    default:
      return state
  }
}

export default airlineReducer
