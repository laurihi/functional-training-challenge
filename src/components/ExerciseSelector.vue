<template>

    <li class="exercise-row" @click="selectExercise" role="button">
      <div class="name">{{ exercise.name }}</div>
      <div class="pointsPerUnit">
        <span>{{ exercise.pointsPerUnit }} pistettä per {{ exercise.unit }}</span>
      </div>
    </li>

</template>

<script>

    export default {
      name: "exercise-selector",
      props: {
        exercise: {
          type: Object
        }
      },
      data() {
        return {
          msg: 'Hello'
        }
      },
      methods: {
        selectExercise() {
          console.log('Selecting exercise ' + this.exercise.name)
          this.$store.state.selectedExercise = this.exercise.name
        }
      },
      mounted(){
        console.log('Exercise selector component ready!')
      }
    }
</script>

<style lang="scss" scoped>

@import "../assets/styles/components/_ExerciseSelector.scss";

</style>
