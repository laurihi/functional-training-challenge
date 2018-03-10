import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'
Vue.use(Vuex)


// https://vuex.vuejs.org/en/state.html
const state = {
  count: 0,
  selectedExercise: undefined,
  exercisesInStaging: [

  ],
  dailyExercises: new Map()
}

// https://vuex.vuejs.org/en/actions.html
const actions = {

  selectActiveExercise(context, exercise){
    console.log('selecting exercise action, ' + exercise.name)
    context.commit('selectExercise', exercise);
  },
  addExerciseToStaging(context, payload){
    console.log('Adding exercise to staging ' + payload.exercise + ' ' + payload.units)
    context.commit('doAddExerciseToStaging', payload)
  },
  commitStagedExercises(context){
    const date = moment().format("MMM Do YY");
    context.commit('doCommitDailyExercises', date)
  },
  incrementCountInState(context){
    console.log('Incrementing count, inside action.')
    context.commit('incrementCount')
  },

}

//https://vuex.vuejs.org/en/mutations.html
const mutations = {

  selectExercise(state, exercise){
    console.log('selecting exercise mutation, ' + exercise.name)
    state.selectedExercise = exercise
  },
  doAddExerciseToStaging(state, payload){
    const exercise = payload.exercise
    const units = Number(payload.units)
    const points = units * Number(payload.exercise.pointsPerUnit)
    const stagedExercise = {
      exercise: exercise,
      units: units,
      points: points
    }
    state.exercisesInStaging.push(stagedExercise)
  },
  doCommitDailyExercises(state, date){
    const dailyExercises = {
      date: date,
      exercises: state.exercisesInStaging
    }
    state.dailyExercises.set(date, dailyExercises)
  },
  incrementCount(state){
    console.log('Incrementing count, inside mutation.')
    state.count = state.count+1
  }
}

// https://vuex.vuejs.org/en/getters.html
const getters = {

  selectedExercise(state){
    console.log('getting selected exercise')
    return state.selectedExercise
  },
  exercisesInStaging(state){
    console.log('Getting exercises in staging')
    return state.exercisesInStaging
  },
  dailyExercises(state){
    return state.dailyExercises
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
