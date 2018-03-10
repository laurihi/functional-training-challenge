<template>

  <div>
    <h2>Päivän suoritukset</h2>
    <div class="summary-container">
      <ul>
        <li v-for="data in exercisesInStaging">
          <div>{{ data.exercise.name }}, {{ data.units }} {{ data.exercise.unit }}</div>
          <div>{{ data.points }} POJOA!!</div>
        </li>
      </ul>
      <button @click="save">Tallenna</button>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'Vuex'

  export default {
    name: "exercise-summary",
    methods: {
      save () {
        this.commitStagedExercises()
      },
      ...mapActions([
        'commitStagedExercises'
      ])
    },
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
