import randomMC from 'random-material-color';
import * as API from 'api';

const _convertArrayElementsToOne = (array) => array.map(() => 1);

const _getPreferencesFromCriteriaAndAlternatives = (criteria, alternatives) => {
  const alternativesNumber = alternatives.length;
  let preferences = [];

  /* description: mounting a matriz for every criterion,
   * the size of each matriz is equal the number of alternatives
   * sample: return
   * [[1, 2, 1]
   * [1, 1, 1]
   * [1, 1, 1]]
  */
  preferences = criteria.map(criterion => {
    criterion.matriz = [];

    alternatives.forEach(() =>
      criterion.matriz.push(_convertArrayElementsToOne(alternatives))
    );

    return criterion;
  });

  return preferences;
}

export const fetchCriteria = () => (dispatch) => {
  API.fetchCriteria()
    .then(response => dispatch({type: 'FETCH_CRITERIA', response}));
};

export const setNewAlternativeShowModal = (data) => (dispatch) => {
  dispatch({type: 'SET_NEW_ALTERNATIVE_SHOW_MODAL', data});
};

export const removeAlternative = (index) => (dispatch) => {
  dispatch({type: 'REMOVE_ALTERNATIVE', index});
  dispatch(generatePreferences());
};

export const createAlternative = (data) => (dispatch) => {
  dispatch({type: 'CREATE_ALTERNATIVE', data});
  dispatch(generatePreferences());
};


export const generatePreferences = () => (dispatch, getState) => {
  const state = getState();
  const {alternatives, criteria} = state.app;
  let preferences = [];

  if (alternatives.length < 2) {
    dispatch({type: 'GENERATE_PREFERENCES', response: []});
    dispatch(generateResults());
    return;
  }

  preferences = _getPreferencesFromCriteriaAndAlternatives(criteria, alternatives);
  dispatch({
    type: 'GENERATE_PREFERENCES',
    response: preferences
  });
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
