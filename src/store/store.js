import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


// https://vuex.vuejs.org/en/state.html
const state = {
  count: 0,
  selectedExercise: {}
}

// https://vuex.vuejs.org/en/actions.html
const actions = {

  selectActiveExercise(context, exercise){
    console.log('selecting exercise action, ' + exercise.name)
    context.commit('selectExercise', exercise);
  },
  incrementCountInState(context){
    console.log('Incrementing count, inside action.')
    context.commit('incrementCount')
  }

}

//https://vuex.vuejs.org/en/mutations.html
const mutations = {

  selectExercise(state, exercise){
    console.log('selecting exercise mutation, ' + exercise.name)
    state.exercise = exercise
  },
  incrementCount(state){
    console.log('Incrementing count, inside mutation.')
    state.count = state.count+1
  }
}

// https://vuex.vuejs.org/en/getters.html
const getters = {

  getSelectedExercise(state){
    console.log('getting selected exercise, ' + state.exercise.name)
    return state.selectedExercise
  },
  getCount(state) {
    console.log('Getting count from getters, returning ' + state.count)
    return state.count
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
