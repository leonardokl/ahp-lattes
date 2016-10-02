import randomMC from 'random-material-color'
import * as API from 'api'
const DEFAULT_PREFERENCE_VALUE = 1

const _createDefaultArray = (size) => {
  let array = []

  for (let i = 0; i < size; i++) {
    array.push(DEFAULT_PREFERENCE_VALUE)
  }

  return array
}

const _createQuadraticMatrix = (size) => {
  let matrix = []

  for (let i = 0; i < size; i++) {
    matrix.push(_createDefaultArray(size))
  }

  return matrix
}

/* description: mounting a matrix for every criterion,
 * the size of each matrix is equal the number of alternatives
 * sample: return
 * [[1, 2, 1]
 * [1, 1, 1]
 * [1, 1, 1]]
*/
const _getPreferencesFromCriteriaAndAlternatives = (criteria, alternatives) => {
  let preferences = criteria.map(criterion => {
    criterion.matrix = _createQuadraticMatrix(alternatives.length)

    return criterion
  })

  return preferences
}

const createCriteriaWeigthMatrix = (criteria) => (dispatch) => {
  const criteriaWeightMatrix = _createQuadraticMatrix(criteria.length)

  dispatch({type: 'CREATE_CRITERIA_WEIGTH_MATRIX', matrix: criteriaWeightMatrix})
}

export const fetchCriteria = () => (dispatch) => {
  API.fetchCriteria()
    .then(response => {
      dispatch({type: 'FETCH_CRITERIA', response})
      dispatch(createCriteriaWeigthMatrix(response))
    })
}

export const initHomePage = () => (dispatch) => {

}

export const setNewAlternativeShowModal = (data) => (dispatch) => {
  dispatch({type: 'SET_NEW_ALTERNATIVE_SHOW_MODAL', data})
}

export const removeAlternative = (index) => (dispatch) => {
  dispatch({type: 'REMOVE_ALTERNATIVE', index})
  dispatch(generatePreferences())
}

export const createAlternative = (data) => (dispatch) => {
  dispatch({type: 'CREATE_ALTERNATIVE', data})
  dispatch(generatePreferences())
}


export const generatePreferences = () => (dispatch, getState) => {
  const state = getState()
  const alternatives = state.alternatives.data
  const criteria = state.criteria.data
  let preferences = []

  if (alternatives.length < 2) {
    dispatch({type: 'GENERATE_PREFERENCES', response: []})
    dispatch(generateResults())
    return
  }

  preferences = _getPreferencesFromCriteriaAndAlternatives(criteria, alternatives)
  dispatch({
    type: 'GENERATE_PREFERENCES',
    response: preferences
  })
  dispatch(generateResults())
}

export const updatePreference = (comparison, index) => (dispatch) => {
  const {firstOption, secondOption} = comparison

  dispatch({
    type: 'UPDATE_PREFERENCE',
    index: index,
    cordinates: {
      x: firstOption.cordinate.x,
      y: firstOption.cordinate.y
    },
    value: firstOption.value
  })

  dispatch({
    type: 'UPDATE_PREFERENCE',
    index: index,
    cordinates: {
      x: secondOption.cordinate.x,
      y: secondOption.cordinate.y
    },
    value: secondOption.value
  })
}

export const updateCriteriaWeigth = (criteriaComparison) => (dispatch, getState) => {
  const criteriaWeightsMatrix = getState().criteriaWeigths.matrix
  const {firstOption, secondOption} = criteriaComparison
  let newCriteriaWeightsMatrix = [...criteriaWeightsMatrix]

  newCriteriaWeightsMatrix[firstOption.cordinate.x][firstOption.cordinate.y] = firstOption.value
  newCriteriaWeightsMatrix[secondOption.cordinate.x][secondOption.cordinate.y] = secondOption.value

  dispatch({type: 'UPDATE_CRITERIA_WEIGTH', matrix: newCriteriaWeightsMatrix})
}

export const generateResults = () => (dispatch, getState) => {
  const state = getState()
  const alternatives = state.alternatives.data

  if (alternatives.length < 2) {
    return dispatch({type: 'GENERATE_RESULTS', response: []})
  }

  return dispatch({
    type: 'GENERATE_RESULTS',
    response: alternatives.map(alternative => ({
      label: alternative.name,
      value: Math.floor(Math.random() * 9),
      color: randomMC.getColor()
    }))
  })
}
