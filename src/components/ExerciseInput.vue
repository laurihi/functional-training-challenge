<template>

  <div>
    <h2>Lisää valitun suorituksen tiedot</h2>
    <div v-if="selectedExercise" class="input-container">
      <div class="input-selected-name">{{ selectedExercise.name }}</div>
      <input class="input-number" type="text" placeholder="0"/>
      <div class="input-unit">{{ selectedExercise.unit }}</div>
      <div class="input-details">Pisteitä {{ selectedExercise.pointsPerUnit}} per {{ selectedExercise.unit }}</div>
      <button>Lisää päivän suorituksiin<span class="forward"></span></button>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'Vuex'

  export default {
        name: "exercise-input",
        computed: {
          ...mapGetters([
            'selectedExercise'
          ])
        }
    }
</script>

<style lang="scss" scoped>

@import "../assets/styles/components/_ExerciseInput.scss";

</style>
