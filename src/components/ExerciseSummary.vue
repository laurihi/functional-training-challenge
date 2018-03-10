<template>

  <div>
    <h2>Päivän suoritukset</h2>
    <div class="summary-container">
      <ul>
        <li v-for="data in exercisesInStaging">
          <div class="name">{{ data.exercise.name }}, {{ data.units }} {{ data.exercise.unit }}</div>
          <div class="points">{{ data.points }} POJOA!!</div>
        </li>
      </ul>
      <div class="summary-footer">
        <div class="summary-total-points">Yhteensä <span>xx</span> pistettä</div>
        <button>Tallenna</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'Vuex'

  export default {
        name: "exercise-summary",
      computed: {
        ...mapGetters([
          'exercisesInStaging'
        ])
      }
    }
</script>

<style lang="scss" scoped>

@import "../assets/styles/components/_ExerciseSummary.scss";

</style>
