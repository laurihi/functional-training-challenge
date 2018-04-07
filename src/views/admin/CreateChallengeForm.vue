<template>
  <div class="componentContainer">
    <h3>Luo uusi haaste</h3>
    <main>
      <div class="form-challenge">
        <input placeholder="">
        <h3>Exercises to include:</h3>
        <ul>
          <li v-for="exercise in exercises">{{ exercise.name }}</li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
  import ExerciseService from 'services/exercises/ExerciseService'
  
  export default {
      name: "create-challenge-form",
      data: function() {
        return {
          exercises: []
        }
      },
      mounted(){
        
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

<style scoped>

</style>
