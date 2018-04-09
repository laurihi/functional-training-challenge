const axios = require('axios');

class ChallengeService {

  constructor() {

  }

  createChallenge(challengeDescriptor) {
    console.log('Creating new challenge: ' + challengeDescriptor)

    let challenge = {}
    let exercises = []
    const exerciseConfiguration = challengeDescriptor.exerciseConfiguration;

    exerciseConfiguration.forEach(
      (value) => {
        const exercise = {}
        exercise.exerciseName = value.exercise.name
        exercise.pointsPerUnit = Number(value.pointsPerUnit)
        exercise.unit = value.exercise.unit
        exercises.push(exercise)
      }
    )

    challenge.name = challengeDescriptor.challengeName
    challenge.starts = challengeDescriptor.startsOn
    challenge.ends = challengeDescriptor.endsOn
    challenge.description = challengeDescriptor.description

    challenge.exercises = exercises



    return new Promise(function(resolve, reject) {

      let headers = {
        'Content-Type': 'application/json'
      }
      axios.post('http://localhost:3000/challenges', challenge, headers)
        .then(response => {
          console.log(response)
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        });

    })
  }

  getChallenges(){

    return new Promise(function(resolve, reject) {

      axios.get('http://localhost:3000/challenges')
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        });

    })
  }

  currentChallenge() {
    return new Promise(function(resolve, reject) {

      axios.get('http://localhost:3000/challenges/current')
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        });

    })
  }
}

export default new ChallengeService()
