<template>
  <div class="app-locales">
        <span class="locale-selector" :class="locale" v-for="locale in locales" @click="switchLocale(locale)" >
          {{ 'locale-'+locale | translate }}
        </span>
  </div>
</template>

<script>
  import Vue from 'vue';
  export default {
    name: "locale-selector",
    methods: {
      switchLocale(locale){
        Vue.i18n.set(locale);
      }
    },
    computed: {
      locales () {
        return Vue.i18n.locales()
      }
    }
  }
</script>

<style scoped>

</style>
