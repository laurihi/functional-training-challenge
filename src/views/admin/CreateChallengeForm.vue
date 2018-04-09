<template>
  <div class="componentContainer">
    <h3>{{ 'header-create-new-challenge' | translate }}</h3>
    <div class="form-challenge container">
      <input v-model="challengeForm.challengeName" placeholder="">
      <h3>Exercises to include:</h3>
      <includible-exercise v-on:data-changed="exerciseDataChanged" :exercise="exercise" v-for="exercise in exercises"></includible-exercise>
      <button @click="submit()">{{ 'actions-admin-submit-form' | translate }}</button>
    </div>
  </div>
</template>

<script>
  import ChallengeService from 'services/challenge/ChallengeService'
  import ExerciseService from 'services/exercises/ExerciseService'
  import IncludibleExercise from 'components/admin/IncludibleExercise'

  export default {
    name: "create-challenge-form",
    data: function() {
      return {
        exercises: [],
        challengeForm: {
          challengeName: '',
          exerciseConfiguration: new Map()
        }
      }
    },
    methods: {

      exerciseDataChanged( exercise, included, pointsPerUnit ) {
        const exerciseData = {
          included: included,
          exercise: exercise,
          pointsPerUnit: pointsPerUnit
        }

        if( exerciseData.included ) {
          this.challengeForm.exerciseConfiguration.set( exercise.name, exerciseData )
        } else {
          this.challengeForm.exerciseConfiguration.delete( exercise.name )
        }
      },
      submit() {
        console.log( "Submitting new training challenge" )
        console.log( this.challengeForm.challengeName )
        console.log( this.challengeForm.exerciseConfiguration )

        const response = ChallengeService.createChallenge( this.challengeForm )
        response.then(
          function(){
            console.log('New challenge added!')
            this.$router.push("/admin")
          }.bind(this),
          function(){
            console.log('Error adding challenge!')
          }
        )
      }
    },
    components: {
      'includible-exercise': IncludibleExercise
    },
    mounted() {
      ExerciseService.getExercises().then(
        function(data) {
          data.forEach(exercise => {
            this.exercises.push(exercise)
          })
        }.bind(this)
      )
    }
  }

</script>

<style>


</style>
