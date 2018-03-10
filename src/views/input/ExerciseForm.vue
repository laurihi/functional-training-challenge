<template>

  <div class="componentContainer">
    <header>
      <img src="../../assets/ambientia-logo.svg">
      <h1>UFTC XIII</h1>
    </header>

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

@import "../../assets/styles/_global.scss";

@import "../../assets/styles/_header.scss";

</style>
