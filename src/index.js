import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router, hashHistory} from 'react-router'
import store from 'config/store'
import routes from 'config/routes'

ReactDOM.render((
  <Provider store={store}>
    <Router routes={routes} history={hashHistory} />
  </Provider>
), document.getElementById('wrapper'))
