const initialState = {
  showModal: false,
};

const newAlternative = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_NEW_ALTERNATIVE_SHOW_MODAL':
    return {...state, showModal: action.data};
  case 'CREATE_ALTERNATIVE':
    return {...state, showModal: false};
  }

  return state;
};

export default newAlternative;
