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
