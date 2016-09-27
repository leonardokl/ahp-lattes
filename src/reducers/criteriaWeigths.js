const initialState = {
  matrix: []
}

const criteriaWeigths = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_CRITERIA_WEIGTH_MATRIX':
      return {...state, matrix: action.matrix}
  }

  return state
}

export default criteriaWeigths
