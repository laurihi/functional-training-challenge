<template>

  <div class="componentContainer">
    <h1>Holaxxxx!</h1>


    <exercise-selector :exercise="exercise" v-for="exercise in exercises()"></exercise-selector>
  </div>
</template>

<script>
  import ExerciseSelector from '../../components/ExerciseSelector'
  import ExerciseService from '../../services/ExerciseService'

    export default {
      name: "excercise-form",
      data() {
        return {
        }
      },
      methods: {
        exercises() {
          const exer = ExerciseService.getExercises()
          console.log(exer)
          return exer
        }
      },
      components: {
        // <my-component> will only be available in parent's template
        'exercise-selector': ExerciseSelector
      },
      mounted(){
        console.log('Exercise form component ready')
      }
    }
</script>

<style lang="scss" scoped>

</style>
