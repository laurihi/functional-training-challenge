<template>

  <div>
    Aasdf
  </div>
</template>

<script>

    export default {
      name: "exercise-selector",
      props: ['exercise'],
      data() {
        return {
          msg: 'Hello'
        }
      },
      methods: {
        printProps(){
          console.log(this.props.exercise);
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
