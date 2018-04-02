<template>

  <div class="componentContainer">
    <header>
      <div class="logo">
        <img src="../../assets/pushup-logo.svg">
      </div>
      <h1>Ultimate Functional Training Challenge</h1>
    </header>

    <main>

      <div class="add-exercise-wrapper">

        <section class="exercise-selector-wrapper">
          <h2>Valitse suoritus</h2>
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
  import ExerciseSummary from '../../components/ExerciseSummary'
  import ExerciseInput from '../../components/ExerciseInput'
  import ExerciseSelector from '../../components/ExerciseSelector'
  import DailyExercises from '../../components/DailyExercises'
  import ExerciseService from '../../services/ExerciseService'

  export default {
      name: "exercise-form",
      data() {
        return {
        }
      },
      methods: {
        exercises() {
          const exer = ExerciseService.getExercises()
          console.log(exer)
          return exer
        }
      },
      components: {
        // <my-component> will only be available in parent's template
        ExerciseSummary,
        'exercise-selector': ExerciseSelector,
        'exercise-input': ExerciseInput,
        'exercise-summary': ExerciseSummary,
        'daily-exercises': DailyExercises
      },
      mounted(){
        console.log('Exercise form component ready')
      }
    }
</script>

<style lang="scss" scoped>

@import "../../assets/styles/_global.scss";
@import "../../assets/styles/_header.scss";

</style>
