import {combineReducers} from 'redux'
import alternatives from './alternatives'
import criteria from './criteria'
import criteriaWeigths from './criteriaWeigths'
import preferences from './preferences'
import results from './results'
import newAlternative from './new-alternative'

export default combineReducers({
  alternatives,
  criteria,
  criteriaWeigths,
  preferences,
  results,
  newAlternative
})
