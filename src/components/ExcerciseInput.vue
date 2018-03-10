<template>

  <div>
    <p>Valittuna: {{ selectedExercise.name }}
  </div>
</template>

<script>
  import { mapGetters } from 'Vuex'

  export default {
        name: "excercise-input",
        computed: {
          ...mapGetters([
            'getSelectedExercise' // mappaa getCount-funktion storesta
          ])
        }
    }
</script>

<style scoped>

</style>
