import Vue from 'vue'
import Router from 'vue-router'

import Scorecard from '../views/scorecard/Scorecard'
import Welcome from '../views/welcome/Welcome'

Vue.use(Router)


export default new Router ({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/scorecard',
      name: 'scorecard',
      component: Scorecard
    }
  ]
})
