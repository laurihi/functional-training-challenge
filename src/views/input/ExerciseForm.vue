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
        ExerciseSelector,
        'exercise-selector': ExerciseSelector
      }
    }
</script>

<style scoped lang="scss">

h1 {
  font-size: 300%;
  font-family: Impact;
}

.componentContainer {
  h1 {
    color: red;
  }
}

</style>
