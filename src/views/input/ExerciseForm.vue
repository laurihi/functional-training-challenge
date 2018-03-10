<template>

  <div class="componentContainer">
    <header>
      <img src="../../assets/ambientia-logo.svg">
      <h1>UFTC XIII</h1>
    </header>

    <main>

    <exercise-selector :exercise="exercise" v-for="exercise in exercises()"></exercise-selector>

    </main>

  </div>
</template>

<script>
  import ExerciseSelector from '../../components/ExerciseSelector'
  import ExerciseService from '../../services/ExerciseService'


  export default {
      name: "excercise-form",
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
        'exercise-selector': ExerciseSelector
      },
      mounted(){
        console.log('Exercise form component ready')
      }
    }
</script>

<style lang="scss" scoped>

@import "../../assets/styles/_global.scss";
@import "../../assets/styles/_header.scss";
@import "../../assets/styles/components/_exercise-selector.scss";

</style>
