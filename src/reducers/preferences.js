const initialState = {
  data: [],
}

const preferences = (state = initialState, action) => {
  switch (action.type) {
  case 'GENERATE_PREFERENCES':
    return {...state, data: action.response}
  case 'UPDATE_PREFERENCE':
    let preference = state.data[action.index]

    preference.matrix[action.cordinates.x][action.cordinates.y] = action.value

    return {...state, data: [
      ...state.data.slice(0, action.index),
      preference,
      ...state.data.slice(action.index + 1)
    ]}
  }

  return state
}

export default preferences
