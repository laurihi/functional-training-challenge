<template>

  <div>
    <h2>Päivän suoritukset</h2>
    <div class="summary-container">
      <ul>
        <li v-for="data in exercisesToBeAdded">
          <div>{{ data.exercise.name }}, {{ data.units }} {{ data.exercise.unit }}</div>
          <div>{{ data.exercise.pointsPerUnit * data.exercise.units }} POJOA!!</div>
        </li>
      </ul>
      <button>Tallenna</button>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'Vuex'

  export default {
        name: "exercise-summary",
      computed: {
        ...mapGetters([
          'exercisesToBeAdded'
        ])
      }
    }
</script>

<style lang="scss" scoped>

@import "../assets/styles/components/_ExerciseSummary.scss";

</style>
