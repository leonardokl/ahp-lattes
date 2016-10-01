import Main from 'ui/main'
import App from 'ui/containers/app/'
import Home from 'ui/containers/app/home/'
import Criteria from 'ui/containers/app/criteria'
import Preferences from 'ui/containers/app/preferences/'

const routes = {
  component: Main,
  childRoutes: [
    {
      path: '/',
      component: App,
      indexRoute: {
        onEnter: (nextState, replace) => replace('/home'),
      },
      childRoutes: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'preferencias',
          component: Preferences,
        },
        {
          path: 'criterios',
          component: Criteria
        },
        {
          path: 'sobre',
          component: null
        }
      ]
    }
  ]
}

module.exports = routes
