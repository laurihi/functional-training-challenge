<template>

  <div class="componentContainer">
    <main>
      <div class="add-exercise-wrapper">

        <section class="exercise-selector-wrapper">
          <template v-if="error === false">
            <h2>{{ $t('actions-choose-exercise') }}</h2>
            <ul>
              <exercise-selector :exercise="exercise" v-for="exercise in allExercises"></exercise-selector>
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
  import ExerciseSummary from 'components/ExerciseSummary'
  import ExerciseInput from 'components/ExerciseInput'
  import ExerciseSelector from 'components/ExerciseSelector'
  import DailyExercises from 'components/DailyExercises'
  import ExerciseService from 'services/exercises/ExerciseService'
  
  export default {
      name: "exercise-form",
      data() {
        return {
          allExercises: [],
          error: false,
          errorMessage: ''
        }
      },
      methods: {
         exercises() {
           ExerciseService.getExercises().then(
             function(data) {
               data.forEach(exercise => {
                 this.allExercises.push(exercise)
               })
             }.bind(this),
             function(){
               this.error = true
               this.errorMessage = 'Unable to get exercises'
             }.bind(this)
           )
        }
      },
      components: {
        'exercise-selector': ExerciseSelector,
        'exercise-input': ExerciseInput,
        'exercise-summary': ExerciseSummary,
        'daily-exercises': DailyExercises
      },
      mounted(){
        this.exercises()
      }
    }
</script>

<style lang="scss" scoped>


</style>
