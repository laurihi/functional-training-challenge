<template>

  <div class="componentContainer">
    <h1>Holaxxxx!</h1>
    <exercise-selector :exercise="exercise"></exercise-selector>
  </div>
</template>

<script>
  import ExerciseSelector from '../../components/ExerciseSelector'

    export default {
      name: "excercise-form",
      data() {
        return {
          exercise: {
            name: 'Työmatkapyöräily',
            pointsPerUnit: 50,
            unit: 'km'
          }
        }
      },
      components: {
        // <my-component> will only be available in parent's template
        'exercise-selector': ExerciseSelector
      }
    }
</script>

<style lang="scss" scoped>

</style>
