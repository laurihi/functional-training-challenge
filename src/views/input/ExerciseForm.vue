<template>

  <div class="componentContainer">
    <header>
      <img src="../../assets/ambientia-logo.svg">
      <h1>UFTC XIII</h1>
    </header>

    <main>

      <section>
        <ul>
          <exercise-selector :exercise="exercise" v-for="exercise in exercises()"></exercise-selector>
        </ul>
      </section>

      <section>
        <exercise-input></exercise-input>
      </section>

      <section>
        <exercise-summary></exercise-summary>
      </section>

    </main>

  </div>
</template>

<script>
  import ExerciseSummary from '../../components/ExerciseSummary'
  import ExerciseInput from '../../components/ExerciseInput'
  import ExerciseSelector from '../../components/ExerciseSelector'
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
        'exercise-summary': ExerciseSummary
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
