const axios = require('axios');

const apiBasePath = 'http://localhost:8080'

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


    return new Promise(function (resolve, reject) {

      let headers = {
        'Content-Type': 'application/json'
      }
      axios.post(`${apiBasePath}/challenges`, challenge, headers)
        .then(response => {
          console.log(response)
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        });

    })
  }

  getChallenges() {

    return new Promise(function (resolve, reject) {

      axios.get(`${apiBasePath}/challenges`)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        });

    })
  }

  currentChallenge() {
    return new Promise(function (resolve, reject) {

      axios.get(`${apiBasePath}/challenges/ongoing`)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        });

    })
  }

  currentChallengeStats() {
    const stats = {
      position: 5,
      points: 3500,
      pointsToAbove: 231,
      personAbove: 'donaldt',
      pointsToBelow: 5,
      personBelow: 'obamab',
      pointsToTop: 2001
    }
    return stats
    /*
    return new Promise(function (resolve, reject) {
        axios.get(`${apiBasePath}/stats`).then(
          function (response) {
            resolve(response.data[0])
          }
        )
      }
    )*/
  }

  currentChallengeScoreboard() {
    // http://localhost:3000/scoreboard?challengeId=2

    return new Promise(function (resolve, reject) {
        this.currentChallenge().then(
          function (data) {
            const challengeId = data.id
            axios.get(`${apiBasePath}/scoreboard?challengeId=${challengeId}`).then(
              function (response) {
                resolve(response.data[0])
              }
            )
          }
        )
      }.bind(this)
    )
  }

  currentChallengeWeeklyScores() {
    const data = {

      weeklyScores: new Map()
    }
    const weekNumbers = [6, 7, 8, 9, 10]
    const participants = ['Börje', 'Aimo', 'Pietros']

    data.participants = participants

    weekNumbers.forEach(function (weekNumber) {

      const weeklyScoresByUser = []

      participants.forEach(function (participant) {
        const row = {}
        row.name = participant
        row.weeklyScore = Math.floor((Math.random() * 750) + 1);
        weeklyScoresByUser.push(row)
      }.bind(this))
      data.weeklyScores.set(weekNumber, weeklyScoresByUser)
    }.bind(this))


    return data
  }


}

export default new ChallengeService()
