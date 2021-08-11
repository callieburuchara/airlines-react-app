import DATA from '../data'

const dataReducer = (state = DATA.routes, action) => {
  switch (action.type) {
    case 'FILTER_BY_AIRLINE':
      return DATA.routes.filter(route => route.airline === Number(action.id))
    case 'FILTER_BY_AIRPORT':
      return state
    default:
      return state
  }
}

export default dataReducer
