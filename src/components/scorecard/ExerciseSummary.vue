<template>

  <div>
    <h2>Päivän suoritukset - {{ selectedDateFormatted }}</h2>
    <div class="summary-container">
      <ul>
        <li v-for="data in dailyExercises">
          <div class="name">{{ data.exercise.name }}, {{ data.units }} {{ data.exercise.unit }}</div>
          <div class="points"><span>{{ data.points }}</span> pistettä</div>
        </li>
      </ul>
      <div class="summary-footer">
        <div class="summary-total-points">Yhteensä <span>{{ totalPoints }}</span> pistettä</div>
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
