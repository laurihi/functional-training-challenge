<template>

    <li class="exercise-row" :class="{ active: isCurrentlyActive }" @click="selectExercise" role="button">
      <div class="name">{{ 'exercise-' + exercise.exerciseKey  | translate }}</div>
      <div class="pointsPerUnit">
        <span>
          	{{ $t('exercise-gives-amount-points-for-every-unit', { amount: exercise.pointsPerUnit, unit: exercise.unit }) }}
        </span>
      </div>
    </li>

</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {

      name: "exercise-selector",
      props: {
        exercise: {
          type: Object
        }
      },
      methods: {
        selectExercise() {
          console.log('Selecting exercise ' + this.exercise.exerciseKey)
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

@import "../../assets/styles/components/ExerciseSelector";

</style>
