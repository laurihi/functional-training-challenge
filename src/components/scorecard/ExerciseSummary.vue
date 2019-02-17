<template>

  <div>
    <h2>{{ 'header-daily-exercises' | translate }} - {{ selectedDateFormatted }}</h2>
    <div class="summary-container">
      <ul>
        <li v-for="data in dailyExercises">
          <div class="name">{{ 'exercise-'+data.exercise.exerciseKey |translate }}, {{ data.units }} {{ data.exercise.unit }}</div>
          <div class="points"><span>{{ data.points }}</span> {{ 'amount-of-points' | translate }}</div>
          <span class="remove-exercise" @click="removeExercise(data.exercise.exerciseKey)">X</span>
        </li>
      </ul>
      <div class="summary-footer">
        <div class="summary-total-points">{{ 'points-grand-total' | translate }} <span>{{ totalPoints }}</span> {{ 'amount-of-points' | translate }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'Vuex'
  import Datepicker from 'vuejs-datepicker';

  import moment from 'moment';

  export default {
    name: "exercise-summary",
    data: () => {
      return {
      }
    },
    methods: {
      ...mapActions([
        'removeExercise'
      ])
    },
    computed: {
      selectedDateFormatted(){
        moment.locale(this.$i18n.locale());
        return moment(this.selectedDate).format(this.$i18n.translate("moment-date-format"))
      },
       ...mapGetters([
          'dailyExercises',
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
