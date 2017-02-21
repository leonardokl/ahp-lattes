const initialState = {
  data: []
}

const alternatives = (state = initialState, action) => {
  switch (action.type) {
  case 'REMOVE_ALTERNATIVE':
    return {...state, data: [
      ...state.data.slice(0, action.index),
      ...state.data.slice(action.index + 1)
    ]}
  case 'CREATE_ALTERNATIVE':
    return {...state, data: [
      ...state.data,
      action.data
    ]}
  }

  return state
}

export default alternatives
