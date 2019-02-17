<template>

  <div v-if="selectedExercise">
    <h2>{{ "scorecard-add-data" | translate }}</h2>
    <div class="input-container">
      <div class="input-selected-name">{{ 'exercise-'+selectedExercise.exerciseKey | translate }}</div>

      <datepicker wrapper-class="date-selector-wrapper" input-class="date-selector" :value="selectedDate" @selected="selectDate" :format="'date-format' | translate" :language="$i18n.locale()"></datepicker>
      
      <input class="input-number" @keyup.enter="addExercise" type="number" placeholder="0" v-model="units"/>
      
      <div class="input-unit">{{ selectedExercise.unit }}</div>
      <div class="input-details">{{ $t('exercise-gives-amount-points-for-every-unit', { amount: selectedExercise.pointsPerUnit, unit: selectedExercise.unit }) }}</div>
      <button @click="addExercise">{{ 'actions-exercise-add-to-daily-score' | translate }}<span class="forward"></span></button>
    </div>
  </div>
</template>

<script>

  import { mapActions, mapGetters } from 'vuex'
  import Datepicker from 'vuejs-datepicker';

  export default {
        name: "exercise-input",
        data: () => {
          return {
            units: 0
          }
        },
        methods: {
          addExercise() {

            const payload = {
              units: this.units,
              exercise: this.selectedExercise,
              date: this.selectedDate
            }
            this.addDailyExercises(payload)
          },
          ...mapActions( {
            addDailyExercises: 'addDailyExercises',
            selectDate: 'selectDate'
          } )
        },
        computed: {
          ...mapGetters([
            'selectedExercise',
            'selectedDate'
          ])
        },
        components: {
          'datepicker': Datepicker
        }
    }
</script>

<style lang="scss" scoped>

@import "../../assets/styles/components/ExerciseInput";

</style>
