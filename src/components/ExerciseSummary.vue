<template>

  <div>
    <h2>Päivän suoritukset</h2>
    <ul>
      <li v-for="data in exercisesToBeAdded">
        <p>{{ data.exercise.name }}, {{ data.units }} {{ data.exercise.unit }}</p>
        <p><strong>{{ data.exercise.pointsPerUnit * data.exercise.units }} POJOA!!</strong></p>
      </li>
    </ul>
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

<style scoped>

</style>
