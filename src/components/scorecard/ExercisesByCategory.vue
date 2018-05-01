<template>
  <li>
    <span>Exercises in {{ category }}</span>
    <ul>
      <exercise-selector :exercise="exercise" v-for="exercise in allExercises"></exercise-selector>
    </ul>
  </li>
</template>

<script>

  import ExerciseSelector from 'components/scorecard/ExerciseSelector'
  import ChallengeService from 'services/challenge/ChallengeService'
    export default {

      name: "exercises-by-category",
      data: function(){
        return {
          allExercises: []

        }
      },
      props: {
        category: {
          type: String
        }
      },
      methods: {
        exercises() {
          ChallengeService.currentChallenge()
            .then(
              function(data) {
                console.log(data.exercises)
                data.exercises.forEach(exercise => {
                  this.allExercises.push(exercise)
                })
              }.bind(this),
              function( error ) {
                console.log('TODO: Error handling ' + error)
              }
            )
        }
      },
      components: {
        'exercise-selector': ExerciseSelector
      },
      mounted() {
        this.exercises()
      }
    }
</script>

<style lang="scss" scoped>

</style>
