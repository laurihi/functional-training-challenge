<template>

  <div>
    <div v-if="selectedExercise" class="input-container">
    <p>Valittuna: {{ selectedExercise.name }}</p>
    <input type="text" placeholder="0"/>
    <p>Pisteitä {{ selectedExercise.pointsPerUnit}} per {{ selectedExercise.unit }}</p>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'Vuex'

  export default {
        name: "exercise-input",
        methods: {
          test(){
            const result = this.selectedExercise
            return result
          }
        },
        computed: {
          ...mapGetters([
            'selectedExercise'
          ])
        }
    }
</script>

<style scoped>

</style>
