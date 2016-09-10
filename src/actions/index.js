import * as API from 'api';

export const fetchCriteria = () => (dispatch) => {
  API.fetchCriteria()
    .then(response => dispatch({type: 'FETCH_CRITERIA', response}));
};
