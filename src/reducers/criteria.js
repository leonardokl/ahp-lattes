const initialState = {
  data: []
}

const criteria = (state = initialState, action) => {
  switch (action.type) {
  case 'FETCH_CRITERIA':
    return {...state, data: action.response}
  }

  return state
}

export default criteria
