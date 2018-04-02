<template>

  <div class="componentContainer">
    <main>
      <div class="add-exercise-wrapper">

        <section class="exercise-selector-wrapper">
          <h2>{{ $t('actions-choose-exercise') }}</h2>
          <ul>
            <exercise-selector :exercise="exercise" v-for="exercise in exercises()"></exercise-selector>
          </ul>
        </section>

        <section class="exercise-input-wrapper">
          <exercise-input></exercise-input>
        </section>

        <section class="exercise-summary-wrapper">
          <exercise-summary></exercise-summary>
        </section>

      </div>

      <div class="daily-score-wrapper">

        <section>
          <daily-exercises></daily-exercises>
        </section>

      </div>

    </main>

  </div>
</template>

<script>
  import ExerciseSummary from 'components/ExerciseSummary'
  import ExerciseInput from 'components/ExerciseInput'
  import ExerciseSelector from 'components/ExerciseSelector'
  import DailyExercises from 'components/DailyExercises'
  import ExerciseService from 'services/ExerciseService'
  
  export default {
      name: "exercise-form",
      data() {
        return {
        }
      },
      methods: {
        exercises() {
          const exercise = ExerciseService.getExercises()
          return exercise
        }
      },
      components: {
        'exercise-selector': ExerciseSelector,
        'exercise-input': ExerciseInput,
        'exercise-summary': ExerciseSummary,
        'daily-exercises': DailyExercises
      }
    }
</script>

<style lang="scss" scoped>


</style>
