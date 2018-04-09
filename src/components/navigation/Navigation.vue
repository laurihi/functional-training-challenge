<template>
    <div class="app-nav">
      <nav>
        <router-link to="/">{{ "nav-frontpage" | translate }}</router-link>
        <router-link to="/scorecard">{{ "nav-exercise-form" | translate }}</router-link>
        <router-link to="exercise">{{ "nav-all-exercises" | translate }} </router-link>
        <router-link to="admin">{{ "nav-admin" | translate }} </router-link>
      </nav>
    </div>
</template>

<script>
    export default {
        name: "navigation"
    }
</script>

<style lang="scss" scoped>
</style>
