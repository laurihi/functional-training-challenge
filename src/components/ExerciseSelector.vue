<template>

    <li class="exercise-row" @click="selectExercise" role="button">
      <div class="name">{{ 'exercise-'+exercise.name  | translate }}</div>
      <div class="pointsPerUnit">
        <span>
          	{{ $t('exercise-gives-amount-points-for-every-unit', { amount: exercise.pointsPerUnit, unit: exercise.unit }) }}
        </span>
      </div>
    </li>

</template>

<script>
    import { mapActions } from 'Vuex'

    export default {

      name: "exercise-selector",
      props: {
        exercise: {
          type: Object
        }
      },
      data() {
        return {
          msg: 'Hello'
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
      mounted(){
        console.log('Exercise selector component ready!')
      }
    }
</script>

<style lang="scss" scoped>

@import "../assets/styles/components/_ExerciseSelector.scss";

</style>
