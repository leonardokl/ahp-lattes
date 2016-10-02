const initialState = {
  data: []
}

const results = (state = initialState, action) => {
  switch (action.type) {
  case 'GENERATE_RESULTS':
    return {...state, data: action.response}
  }

  return state
}

export default results
