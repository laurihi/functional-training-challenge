<template>

  <div class="componentContainer">
    <h1>Welcome!</h1>
    <navigation></navigation>
  </div>
</template>

<script>

  import Navigation from 'components/navigation/Navigation';
  
  export default {
      name: "exercise-form",
      components: {
        "navigation": Navigation
      }
    }
</script>

<style lang="scss" scoped>

</style>
