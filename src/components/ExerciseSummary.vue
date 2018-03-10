<template>

  <div>
    <h2>Päivän suoritukset</h2>
    <ul>
      <li v-for="data in exercisesInStaging">
        <p>{{ data.exercise.name }}, {{ data.units }} {{ data.exercise.unit }}</p>
        <p><strong>{{ data.points }} POJOA!!</strong></p>
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
          'exercisesInStaging'
        ])
      }
    }
</script>

<style scoped>

</style>
