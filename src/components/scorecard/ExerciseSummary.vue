<template>

  <div>
    <h2>Päivän suoritukset - {{ selectedDate }}</h2>
    <div class="summary-container">
      <ul>
        <li v-for="data in exercisesInStaging">
          <div class="name">{{ data.exercise.name }}, {{ data.units }} {{ data.exercise.unit }}</div>
          <div class="points"><span>{{ data.points }}</span> pistettä</div>
        </li>
      </ul>
      <div class="summary-footer">
        <div class="summary-total-points">Yhteensä <span>{{ totalPoints }}</span> pistettä</div>
        <button @click="save()">Tallenna</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'Vuex'
  import Datepicker from 'vuejs-datepicker';

  export default {
    name: "exercise-summary",
    data: () => {
      return {
      }
    },
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
          'exercisesInStaging',
          'totalPoints',
          'selectedDate'
       ])
    },
    components: {
      'date-picker': Datepicker,

    }
  }
</script>

<style lang="scss" scoped>

@import "../../assets/styles/components/ExerciseSummary";

</style>
