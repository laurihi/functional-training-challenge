<template>
  
  <div class="exercise-row">
    <span>
      <input type="checkbox"/>
    </span>
    <span>
      {{ 'exercise-'+exercise.name | translate }}
    </span>
    <span>
      <input type="number">
    </span>
   </div>

</template>

<script>
  import { mapActions, mapGetters } from 'Vuex'
  
  export default {
    
    name: "exercise-selector",
    props: {
      exercise: {
        type: Object
      }
    },
    methods: {
      selectExercise() {
        console.log('Selecting exercise ' + this.exercise.name)
        this.selectActiveExercise(this.exercise)
      },
      ...mapActions( {
        selectActiveExercise: 'selectActiveExercise'
      } )
    },
    computed: {
      isCurrentlyActive() {
        return this.selectedExercise != undefined && this.selectedExercise === this.exercise;
      },
      ...mapGetters({
        selectedExercise: 'selectedExercise'
      })
    }
  }
</script>

<style lang="scss" scoped>


</style>
