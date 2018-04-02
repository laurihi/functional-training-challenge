<template>
    <div>
      <ul>
        <li><router-link to="/">Frontpage</router-link></li>
        <li><router-link to="/exercise">Mark your exercises</router-link></li>
        <li><router-link to="exercise">All exercises</router-link></li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "navigation"
    }
</script>

<style lang="scss" scoped>
</style>
