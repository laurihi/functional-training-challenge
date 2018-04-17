<template>

  <div class="componentContainer">
    <main>
      <div class="add-exercise-wrapper">

        <section class="exercise-selector-wrapper">
          <template v-if="error === false">
            <h2>{{ $t('actions-choose-exercise') }}</h2>
            <ul>
              <exercises-by-category :category="category" v-for="category in categories"></exercises-by-category>
            </ul>
          </template>
          <template v-else>
            <p>{{ errorMessage }}</p>
          </template>
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

  import ExerciseSummary from 'components/scorecard/ExerciseSummary'
  import ExerciseInput from 'components/scorecard/ExerciseInput'
  import ExercisesByCategory from 'components/scorecard/ExercisesByCategory'
  import DailyExercises from 'components/DailyExercises'


  export default {
      name: "exercise-form",
      data() {
        return {
          categories: ['commuting', 'leisure-time', 'favorites'],
          error: false,
          errorMessage: ''
        }
      },
      methods: {


      },
      components: {
        'exercises-by-category': ExercisesByCategory,
        'exercise-input': ExerciseInput,
        'exercise-summary': ExerciseSummary,
        'daily-exercises': DailyExercises
      },
      mounted(){
        this.selectDate(new Date())
      }
    }
</script>

<style lang="scss" scoped>


</style>
