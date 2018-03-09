<template>
  <div id="app">
    <img src="../../assets/logo.png">
      <h1>{{ msg }}</h1>
      <h2>Essential Links</h2>
      <ul>
        <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
        <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li><a href="http://router.vuejs.org/" target="_blank">vuerouter</a></li>
        <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
        <li><a href="http://vue-loader.vuejs.org/" target="_blank">vueloader</a></li>
        <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
      </ul>

    <h2>Vue-router</h2>
    <ul>
        <li><router-link to="/sample">To default route component</router-link></li>
        <li><router-link to="/alternative">To alternative route component</router-link></li>
    </ul>

    <h2>Vuex</h2>
    <ul>
      <li><button @click="increment()">Increase count</button> {{ getCount }}</li>
    </ul>
  </div>

</template>

<script>

  import { mapActions, mapGetters } from 'Vuex'

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Hello'
      }
    },
    methods: {
      increment() {
        console.log('Incrementing state')
        this.incrementState()
      },
      ...mapActions( {
        incrementState: 'incrementCountInState'
      } )
    },
    computed: {
      ...mapGetters([
        'getCount' // mappaa getCount-funktion storesta
      ])
    }
  }
</script>

<style>
  #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }

  h1, h2 {
      font-weight: normal;
    }

  ul {
      list-style-type: none;
      padding: 0;
    }

  li {
      display: inline-block;
      margin: 0 10px;
    }

  a {
      color: #42b983;
    }

</style>
