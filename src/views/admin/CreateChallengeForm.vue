<template>
  <div class="componentContainer">
    <h3>{{ 'header-create-new-challenge' | translate }}</h3>
    <div class="form-challenge container">
      <input placeholder="">
      <h3>Exercises to include:</h3>
      <includible-exercise :exercise="exercise" v-for="exercise in exercises"></includible-exercise>
    </div>
  </div>
</template>

<script>
  import ExerciseService from 'services/exercises/ExerciseService'
  import IncludibleExercise from 'components/admin/IncludibleExercise'
  
  export default {
    name: "create-challenge-form",
    data: function() {
      return {
        exercises: []
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
