<template>

  <div class="componentContainer">
    Score-board component
  </div>
</template>

<script>
  import ChallengeService from 'services/challenge/ChallengeService'
  export default {
      name: "exercise-form",
      data() {
        return {

        }
      },
      methods: {

      },
      mounted(){
        ChallengeService.currentChallengeScoreboard()
          .then(
            function(data){
              console.log("Rows returned:" + data.rows.length)
            }
          )
      }
    }
</script>

<style lang="scss" scoped>


</style>
