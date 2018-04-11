<template>

  <div v-if="selectedExercise">
    <h2>{{ "scorecard-add-data" | translate }}</h2>
    <div class="input-container">
      <div class="input-selected-name">{{ 'exercise-'+selectedExercise.name | translate }}</div>
      <input class="input-number" @keyup.enter="addExercise" type="number" placeholder="0" v-model="units"/>
      <div class="input-unit">{{ selectedExercise.unit }}</div>
      <div class="input-details">{{ $t('exercise-gives-amount-points-for-every-unit', { amount: selectedExercise.pointsPerUnit, unit: selectedExercise.unit }) }}</div>
      <button @click="addExercise">Lisää päivän suorituksiin<span class="forward"></span></button>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'Vuex'

  export default {
        name: "exercise-input",
        data: () => {
          return {
            units: 0
          }
        },
        methods: {
          addExercise() {
            console.log(this.units)
            const payload = {
              units: this.units,
              exercise: this.selectedExercise
            }
            this.addExerciseToStaging(payload)
          },
          ...mapActions( {
            addExerciseToStaging: 'addExerciseToStaging'
          } )
        },
        computed: {
          ...mapGetters([
            'selectedExercise'
          ])
        }
    }
</script>

<style lang="scss" scoped>

@import "../../assets/styles/components/ExerciseInput";

</style>
