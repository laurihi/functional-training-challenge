import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


const state = {
  count: 0,
  selectedExercise: undefined,
  selectedDate: undefined,
  exercises: {
    date: undefined,
    data: new Map()
  },
  view: {
    exercises: []
  }
}

const actions = {

  selectActiveExercise(context, exercise){
    context.commit('selectExercise', exercise);
  },
  selectDate(context, date){
    context.commit('selectDate', date)
  },
  addDailyExercises(context, payload){
    context.commit('commitDailyExercises', payload)
  },
  removeExercise(context, payload){
    context.commit('removeExercise', payload)
  }

}

const mutations = {

  selectExercise(state, exercise){
    console.log('selecting exercise mutation, ' + exercise.name)
    state.selectedExercise = exercise
  },
  selectDate(state, date){
    state.selectedDate = date
  },
  commitDailyExercises(state, payload) {
    const exercise = payload.exercise
    let units = Number(payload.units)
    let points = units * Number(payload.exercise.pointsPerUnit)
    const date = payload.date

    let currentData = state.exercises.data.get(exercise.name)
    if(currentData){
      points += currentData.points
      units += currentData.units
    }
    const exerciseDescriptor = {
      exercise: exercise,
      units: units,
      points: points
    }

    state.exercises.data.set(exercise.name, exerciseDescriptor)

    state.view.exercises = []
    state.exercises.data.forEach(
      function(row){
        this.state.view.exercises.push(row)
      }.bind(this)
    )
  },
  removeExercise(state, payload){
    let exercise = state.exercises.data.get(payload)
    state.exercises.data.delete(payload)

    state.view.exercises = []
    state.exercises.data.forEach(
      function(row){
        this.state.view.exercises.push(row)
      }.bind(this)
    )
  }
}

const getters = {

  selectedExercise(state){
    console.log('getting selected exercise')
    return state.selectedExercise
  },
  selectedDate(state){
    return state.selectedDate
  },
  dailyExercises(state){
    console.log('Getting exercises in staging')
    return state.view.exercises
  },
  totalPoints(state){
    let points = 0
    state.view.exercises.forEach(
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
