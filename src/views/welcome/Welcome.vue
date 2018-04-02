<template>

  <div class="componentContainer">
  </div>
</template>

<script>
  
  import Navigation from 'components/navigation/Navigation';
  import LocaleSelector from 'components/locale/LocaleSelector'

  export default {
      name: "exercise-form",
      components: {
        LocaleSelector,
        "navigation": Navigation,
        "locale-selector": LocaleSelector
      }
    }
</script>

<style lang="scss" scoped>

</style>
