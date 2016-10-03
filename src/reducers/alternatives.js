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
    console.log('CREATE_ALTERNATIVE', state);
    console.log('CREATE_ALTERNATIVE_action', action.data);
    return {...state, data: [
      ...state.data,
      action.data
    ]}
  }

  return state
}

export default alternatives
