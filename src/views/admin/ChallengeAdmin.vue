<template>

  <div class="componentContainer">
    <main>
      <p>Challenge admin</p>
      <ul>
        <li v-for="challenge in challenges">
          {{ challenge.name }}
        </li>
        <button @click="createNew()">{{ 'admin-create-new-challenge' | translate }}</button>
      </ul>
    </main>
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
      createNew() {
        this.$router.push("/admin/challenge/new")
      },
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
