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

    export default {

      name: "exercises-by-category",
      props: {
        allExercises: {
          type: Array
        },
        category: {
          type: String
        }
      },
      components: {
        'exercise-selector': ExerciseSelector
      }
    }
</script>

<style lang="scss" scoped>

</style>
