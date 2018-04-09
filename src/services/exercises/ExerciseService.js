const axios = require('axios');

class ExerciseService {

  constructor() {

  }

  getExercises () {
    return new Promise(function(resolve, reject) {
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

}


export default new ExerciseService()
