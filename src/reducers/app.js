const initialState = {
  criteria: [],
  alternatives: [],
  preferences: [],
  result: []
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CRITERIA':console.log("FETCH_CRITERIA");
    return {...state, criteria: action.response};
  }

  return state;
};

export default app;
