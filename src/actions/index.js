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


// return an array of sums
const getAllColumnsSums = (matrix) => {
  let sums = []

  matrix.forEach((row, x) => {
    let sum = 0

    matrix.forEach((row, y) => (sum += matrix[y][x]))
    sums.push(sum)
  })


  return sums
}

// return an array of sums
const getAllRowsSums = (matrix) => {
  let sums = []

  matrix.forEach((row, x) => {
    let sum = 0

    matrix.forEach((row, y) => (sum += matrix[x][y]))
    sums.push(sum)
  })


  return sums
}

const divideMatrixItemsByCollumnSums = (matrix) => {
  const collumnsSum = getAllColumnsSums(matrix)

  return matrix.map((row) =>
    row.map((item, index) => (item / collumnsSum[index]))
  )
}

const getAverageMatrix = (matrix) => {
  const matrixDivided = divideMatrixItemsByCollumnSums(matrix)
  const rowsSum = getAllRowsSums(matrixDivided)
  const rowsAverage = rowsSum.map(sum => sum / matrix.length)

  return rowsAverage
}

export const generateResults = () => (dispatch, getState) => {
  const alternatives = getState().alternatives.data

  if (alternatives.length < 2) {
    return dispatch({type: 'GENERATE_RESULTS', response: []})
  }

  const criteria = getState().criteriaWeigths.matrix
  const criteriaAverage = getAverageMatrix(criteria)
console.log('criteriaAverage', criteriaAverage);
  const preferences = getState().preferences.data
  const preferencesAverages = preferences.map(preference =>
    getAverageMatrix(preference.matrix)
  )

function sumArrays(arr1, arr2) {
    let novoArray = [];

    arr1.forEach((criterio, idx) => {
      const soma = parseFloat(criterio) + parseFloat(arr2[idx]);
      console.log('A', criterio);
      console.log('arr2[idx]', arr2[idx]);
      console.log('SOMAAAAAAAA', soma);
      console.log('tyoe soma', typeof soma);
      novoArray.push(parseFloat(soma.toFixed(4)));
    })

    return novoArray;
}

console.log('preferencesAverages', preferencesAverages);
  const multipliedPreferenceAverageByCriteriaAverage = preferencesAverages.map(
      (arr, index) => arr.map(value => value * criteriaAverage[index]));
    console.log('multipliedPreferenceAverageByCriteriaAverage', multipliedPreferenceAverageByCriteriaAverage);

    const initArray = alternatives.map(() => 0.0);
    console.log('initArray', initArray);

     const results = multipliedPreferenceAverageByCriteriaAverage.reduce(sumArrays , initArray);

     console.log('results', results);


  return dispatch({
    type: 'GENERATE_RESULTS',
    response: results.map((result, index) => ({
      label: alternatives[index].name,
      value: result,
      color: randomMC.getColor()
    }))
  })
}

export const initHomePage = () => (dispatch) => {
  dispatch(generateResults())
}
