const startPositionReducer = (state = 0, action) => {
  if (action.type === 'INCREASE_START') {
    return state + action.amount
  } else if (action.type === 'DECREASE_START') {
    return state - action.amount
  } else {
    return 0
  }
}

export default startPositionReducer
