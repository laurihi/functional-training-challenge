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
  import { mapActions } from 'vuex'

  import ExerciseSummary from 'components/scorecard/ExerciseSummary'
  import ExerciseInput from 'components/scorecard/ExerciseInput'
  import ExerciseSelector from 'components/scorecard/ExerciseSelector'
  import DailyExercises from 'components/DailyExercises'

  import ChallengeService from 'services/challenge/ChallengeService'

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
           ChallengeService.currentChallenge()
             .then(
               function(data) {
                 console.log(data.exercises)
                 data.exercises.forEach(exercise => {
                   this.allExercises.push(exercise)
                 })
               }.bind(this),
               function( error ) {
                  console.log('TODO: Error handling ' + error)
               }
             )
        },
        ...mapActions( {
          selectDate: 'selectDate'
        })

      },
      components: {
        'exercise-selector': ExerciseSelector,
        'exercise-input': ExerciseInput,
        'exercise-summary': ExerciseSummary,
        'daily-exercises': DailyExercises
      },
      mounted(){
        this.exercises()
          this.selectDate(new Date())
      }
    }
</script>

<style lang="scss" scoped>


</style>
