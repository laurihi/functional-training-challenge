const axios = require('axios');

class ChallengeService {

  constructor() {

  }

  createChallenge(challengeDescriptor) {
    console.log('Creating new challenge: ' + challengeDescriptor)

    let challenge = {}

    challenge.name = challengeDescriptor.challengeName
    challenge.starts = "20-12-2020"
    challenge.ends = "20-12-2021"
    challenge.description = "New challenge"

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
