<template>
  <div id="app">
    <app-header></app-header>
    <navigation></navigation>
    <router-view/>
  </div>
  
</template>

<script>
  
  import AppHeader from 'components/header/AppHeader'
  import Navigation from 'components/navigation/Navigation';
  
  export default {
    name: 'app',
    data() {
      return {
      }
    },
    components:{
      "navigation": Navigation,
      "app-header": AppHeader
    }

  }
</script>

<style lang="scss">

@import "/assets/styles/_global.scss";
@import "/assets/styles/_base.scss";

</style>
