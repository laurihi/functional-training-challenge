const axios = require('axios');

const exerciseApiBasePath = 'http://localhost:8080/exercise'

class ExerciseService {

  constructor() {

  }

  saveExercise(exercise, units, selectedDate) {

    const payload = {
      userHandle: "laurih",
      date: selectedDate,
      dailyActions: [
        {
          exercise: exercise,
          units: units
        }
      ]
    }
    let headers = {
      'Content-Type': 'application/json'
    }
    return new Promise(function (resolve, reject) {
      // Do async job
      axios.post(`${exerciseApiBasePath}/save`, payload, headers)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        });

    })
  }

  getExercises() {
    return new Promise(function (resolve, reject) {
      // Do async job
      axios.get('http://localhost:3000/exercises')
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        });

    })
  }

  getExercisesByCategories() {
    return new Promise(function (resolve, reject) {
      // Do async job
      axios.get(`${exerciseApiBasePath}/available`)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        });

    })
  }

}


export default new ExerciseService()
