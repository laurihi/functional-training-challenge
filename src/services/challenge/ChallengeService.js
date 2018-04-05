const axios = require('axios');

class ChallengeService {

  constructor() {

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


}


export default new ChallengeService()
