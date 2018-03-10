<template>

  <div>
    Aasdf
  </div>
</template>

<script>

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
        printProps(){
          console.log(this.exercise.name)
          console.log(this.exercise.unit)
          console.log(this.exercise.pointsPerUnit)
        }
      },
      mounted(){
        console.log('Component ready!')
        this.printProps()
      }
    }
</script>

<style scoped>

</style>
