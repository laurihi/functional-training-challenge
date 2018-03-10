<template>

  <div>
    <div class="exercise-row" @click="selectExercise">
      <h3 class="name">{{ exercise.name }}</h3>
      <div class="pointsPerUnit">
        <p>{{ exercise.pointsPerUnit }} pistettä per {{ exercise.unit }}</p>
      </div>
    </div>
  </div>
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

<style scoped>

</style>
