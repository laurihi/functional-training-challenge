<template>
  <header>
    <div class="logo">
      <img class="app-logo" src="../../assets/pushup-logo.svg">
    </div>
    <h1>{{ 'header-training-challenge' | translate }}</h1>
    <locale-selector></locale-selector>
  </header>
</template>

<script>
  import LocaleSelector from 'components/locale/LocaleSelector'
  export default {
    name: "app-header",
    components: {
      'locale-selector': LocaleSelector,
    }
  }
</script>

<style>
  
  @import "../../assets/styles/_header.scss";

</style>
