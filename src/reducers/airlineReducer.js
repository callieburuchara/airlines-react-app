import DATA from '../data'

const airlineReducer = (state = {name: "All Airlines", list: DATA.airlines, id: 0}, action) => {
  switch (action.type) {
    case 'RESET':
      return {name: "All Airlines", list: DATA.airlines, id: 0}
    case 'FILTER_BY_AIRLINE':
      return {name: action.name, list: DATA.airlines, id: action.id}
    default:
      return state
  }
}

export default airlineReducer
