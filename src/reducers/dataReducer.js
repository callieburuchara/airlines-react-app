import DATA from '../data'

const dataReducer = (state = DATA.routes, action) => {
  console.log(action)
  switch (action.type) {
    case 'RESET':
      return DATA.routes
    case 'FILTER_BY_AIRLINE':
      return DATA.routes.filter(route => route.airline === Number(action.id))
    case 'FILTER_BY_AIRPORT':
      return DATA.routes.filter(route => route.src === action.code || route.dest === action.code)
    default:
      return state
  }
}

export default dataReducer
