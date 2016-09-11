const initialState = {
  criteria: [],
  alternatives: [],
  preferences: [],
  results: []
};

const app = (state = initialState, action) => {
  switch (action.type) {
  case 'FETCH_CRITERIA':
    return {...state, criteria: action.response};
  case 'REMOVE_ALTERNATIVE':
    return {...state, alternatives: [
      ...state.alternatives.slice(0, action.index),
      ...state.alternatives.slice(action.index + 1)
    ]};
  case 'CREATE_ALTERNATIVE':
    return {...state, alternatives: [
      ...state.alternatives,
      action.data
    ]};
  case 'GENERATE_PREFERENCES':
    return {...state, preferences: action.response};
  case 'GENERATE_RESULTS':
    return {...state, results: action.response};
  }

  return state;
};

export default app;
