import thunk from 'redux-thunk'
import reducers from 'reducers'
import {applyMiddleware, createStore} from 'redux'

const configureStore = () =>
  createStore(reducers, applyMiddleware(thunk))

export default configureStore()
