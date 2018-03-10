import Vue from 'vue'
import Router from 'vue-router'

import VueInfo from '../views/vue-info/VueInfo'
import ExerciseForm from '../views/input/ExerciseForm'

Vue.use(Router)

const SampleRouteComponent =  { template: '<div>' +
  '<p>This is the default view!</p>' +
  '<ul>' +
    '<li><router-link to="alternative">Switch</router-link></li>' +
    '<li><router-link to="/">Back to vue info</router-link></li>' +
  '</ul>' +
  '</div>' }

const DifferentRouteComponent = { template: '<div>' +
  '<p>This is the alternative view</p>' +
  '<ul>' +
  '<li><router-link to="sample">Switch back</router-link></li>' +
  '<li><router-link to="/">Back to vue info</router-link></li>' +
  '</ul>' +
  '</div>' }


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
      path: '/alternative',
      name: 'alternative',
      component: DifferentRouteComponent
    },
    {
      path: '/vue-info',
      name: 'vueinfo',
      component: VueInfo
    }
  ]
})
