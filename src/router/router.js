import Vue from 'vue'
import Router from 'vue-router'

import ExerciseForm from '../views/input/ExerciseForm'
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
      path: '/exercise',
      name: 'exercise',
      component: ExerciseForm
    }
  ]
})
