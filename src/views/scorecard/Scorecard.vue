<template>

  <div class="componentContainer">
    <main>
      <div class="add-exercise-wrapper">

        <section class="exercise-selector-wrapper">
          <template v-if="error === false">
            <h2>{{ $t('actions-choose-exercise') }}</h2>
  
            <ul>
              <exercises-by-category :allExercises="exercisesByCategory[category]" :category="category" v-for="category in categories" :key="category"></exercises-by-category>
            </ul>
          </template>
          <template v-else>
            <p>{{ errorMessage }}</p>
          </template>
        </section>

        <section class="exercise-input-wrapper">
          <exercise-input></exercise-input>
        </section>

        <section class="exercise-summary-wrapper">
          <exercise-summary></exercise-summary>
        </section>

      </div>

      <div class="daily-score-wrapper">

        <section>
          <daily-exercises></daily-exercises>
        </section>

      </div>

    </main>

  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import ExerciseSummary from 'components/scorecard/ExerciseSummary'
  import ExerciseInput from 'components/scorecard/ExerciseInput'
  import ExercisesByCategory from 'components/scorecard/ExercisesByCategory'
  import DailyExercises from 'components/DailyExercises'

  import ExerciseService from 'services/exercises/ExerciseService'


  export default {
    
    name: "exercise-form",
    data() {
      return {
        categories: [],
        error: false,
        errorMessage: '',
        exercisesByCategory: new Map()
      }
    },
    methods: {
      ...mapActions( {
        selectDate: 'selectDate'
      })
    },
    components: {
      'exercises-by-category': ExercisesByCategory,
      'exercise-input': ExerciseInput,
      'exercise-summary': ExerciseSummary,
      'daily-exercises': DailyExercises
    },
    mounted() {
      
      const exercisesRequest = ExerciseService.getExercisesByCategories();
      
      exercisesRequest.then(
        
        function(data) {
          
          const exercisesByCategory = data.exercisesByCategory
          this.categories = Object.getOwnPropertyNames(exercisesByCategory)
          this.exercisesByCategory = exercisesByCategory
  
        }.bind(this),
        function(){
          console.log('Error');
        }.bind(this)
      )
      
      this.selectDate(new Date())
    }
  }
</script>

<style lang="scss" scoped>


</style>
