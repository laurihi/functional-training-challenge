<template>

  <div v-if="selectedExercise">
    <h2>Lisää valitun suorituksen tiedot</h2>
    <div class="input-container">
      <div class="input-selected-name">{{ selectedExercise.name }}</div>
      <input class="input-number" @keyup.enter="addExercise" type="number" placeholder="0" v-model="units"/>
      <div class="input-unit">{{ selectedExercise.unit }}</div>
      <div class="input-details">Pisteitä {{ selectedExercise.pointsPerUnit}} per {{ selectedExercise.unit }}</div>
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

@import "../assets/styles/components/_ExerciseInput.scss";

</style>
