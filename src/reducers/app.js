const initialState = {
  criteria: [],
  alternatives: [1, 2],
  preferences: [],
  results: []
};

const app = (state = initialState, action) => {
  switch (action.type) {
  case 'FETCH_CRITERIA':
    return {...state, criteria: action.response};
  }

  return state;
};

export default app;
