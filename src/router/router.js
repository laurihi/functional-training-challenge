import Vue from 'vue'
import Router from 'vue-router'

import Scoreboard from 'views/scoreboard/Scoreboard'
import Scorecard from 'views/scorecard/Scorecard'
import Admin from 'views/admin/ChallengeAdmin'
import CreateChallengeForm from 'views/admin/CreateChallengeForm'
import Welcome from 'views/welcome/Welcome'

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
    },
    {
      path: '/scoreboard',
      name: 'scoreboard',
      component: Scoreboard
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/admin/challenge/new',
      name: 'admin',
      component: CreateChallengeForm
    }
  ]
})
