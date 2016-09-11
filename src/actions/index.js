import randomMC from 'random-material-color';
import * as API from 'api';

export const fetchCriteria = () => (dispatch) => {
  API.fetchCriteria()
    .then(response => dispatch({type: 'FETCH_CRITERIA', response}));
};

export const setNewAlternativeShowModal = (data) => (dispatch) => {
  dispatch({type: 'SET_NEW_ALTERNATIVE_SHOW_MODAL', data});
};

export const removeAlternative = (index) => (dispatch) => {
  dispatch({type: 'REMOVE_ALTERNATIVE', index});
  dispatch(generateResults());
};

export const createAlternative = (data) => (dispatch) => {
  dispatch({type: 'CREATE_ALTERNATIVE', data});
  dispatch(generateResults());
};

export const generateResults = () => (dispatch, getState) => {
  const state = getState();
  const {alternatives} = state.app;

  if (alternatives.length < 2) {
    return dispatch({type: 'GENERATE_RESULTS', response: []});
  }

  return dispatch({
    type: 'GENERATE_RESULTS',
    response: alternatives.map(alternative => ({
      label: alternative.name,
      value: Math.floor(Math.random() * 9),
      color: randomMC.getColor()
    }))
  });

};
