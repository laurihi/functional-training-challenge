import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'
Vue.use(Vuex)


// https://vuex.vuejs.org/en/state.html
const state = {
  count: 0,
  selectedExercise: undefined,
  selectedDate: undefined,
  exercises: {
    date: undefined,
    rows: []
  },
  dailyExercises: new Map()
}

// https://vuex.vuejs.org/en/actions.html
const actions = {

  selectActiveExercise(context, exercise){
    console.log('selecting exercise action, ' + exercise.name)
    context.commit('selectExercise', exercise);
  },
  selectDate(context, date){
    context.commit('selectDate', date)
  },
  addDailyExercises(context, payload){
    console.log('Adding exercise to staging ' + payload.exercise + ' ' + payload.units+', on ' + payload.date)
    context.commit('commitDailyExercises', payload)
  }

}

//https://vuex.vuejs.org/en/mutations.html
const mutations = {

  selectExercise(state, exercise){
    console.log('selecting exercise mutation, ' + exercise.name)
    state.selectedExercise = exercise
  },
  selectDate(state, date){
    state.selectedDate = date
  },
  commitDailyExercises(state, payload){
    const exercise = payload.exercise
    const units = Number(payload.units)
    const points = units * Number(payload.exercise.pointsPerUnit)
    const date = payload.date
    const stagedExercise = {
      exercise: exercise,
      units: units,
      points: points
    }
    state.exercises.rows.push(stagedExercise)
  }
}

// https://vuex.vuejs.org/en/getters.html
const getters = {

  selectedExercise(state){
    console.log('getting selected exercise')
    return state.selectedExercise
  },
  selectedDate(state){
    return state.selectedDate
  },
  exercisesInStaging(state){
    console.log('Getting exercises in staging')
    return state.exercises.rows
  },
  totalPoints(state){
    let points = 0
    state.exercises.rows.forEach(
      exercise => {
        points += exercise.points
      }
    )
    return points
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
