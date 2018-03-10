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
