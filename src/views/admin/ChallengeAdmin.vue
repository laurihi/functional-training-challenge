<template>

  <div class="componentContainer">
    <p>Challenge admin</p>
    <ul>
      <li v-for="challenge in challenges">
        {{ challenge.name }}
      </li>
    </ul>
  </div>
</template>

<script>

  import ChallengeService from 'services/challenge/ChallengeService'
  
  export default {
      name: "challenge-admin",
      data() {
        return {
          challenges: [],
          error: false,
          errorMessage: ''
        }
      },
    methods: {
      getChallenges() {
        ChallengeService.getChallenges().then(
          function(data) {
            data.forEach(challenge => {
              this.challenges.push(challenge)
            })
          }.bind(this),
          function(){
            this.error = true
            this.errorMessage = 'Unable to get challenges'
          }.bind(this)
        )
      }
    },
    mounted() {
        this.getChallenges()
    }
    }
</script>

<style lang="scss" scoped>


</style>
