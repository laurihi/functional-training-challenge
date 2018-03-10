<template>

  <div class="componentContainer">
    <h1>Holaxxxx!</h1>
    <exercise-selector exercise="Test"></exercise-selector>
  </div>
</template>

<script>
  import ExerciseSelector from '../../components/ExerciseSelector'

    export default {
      name: "excercise-form",
      components: {
        // <my-component> will only be available in parent's template
        'exercise-selector': ExerciseSelector
      }
    }
</script>

<style lang="scss" scoped>

</style>
