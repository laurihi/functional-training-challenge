import Vue from 'vue'
import Router from 'vue-router'

import VueInfo from '../views/vue-info/VueInfo'
import ExerciseForm from '../views/input/ExerciseForm'

Vue.use(Router)



export default new Router ({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'vueinfo'
      }
    },
    {
      path: '/exercise',
      name: 'exercise',
      component: ExerciseForm
    },
    {
      path: '/vue-info',
      name: 'vueinfo',
      component: VueInfo
    }
  ]
})
