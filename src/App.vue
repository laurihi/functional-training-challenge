<template>
  <div id="app">
    <router-view/>
  </div>


</template>

<script>

  export default {
  name: 'app',
    data() {
      return {
      }
    }

}
</script>

<style lang="scss">

$amb-color-red: rgb(255, 36, 87);
$amb-color-orange: rgb(255, 110, 0);
$amb-color-green: rgb(80, 255, 126);
$amb-color-blue: rgb(5, 5, 255);
$amb-color-darkblue: rgb(0, 0, 102);
$amb-color-magenta: rgb(212, 0, 172);
$amb-color-black: rgb(0, 0, 0);

html, body {
  margin: 0;
  padding: 0;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

</style>
