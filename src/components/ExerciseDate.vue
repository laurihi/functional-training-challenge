<template>
    <div>
      <datepicker :value="state.selectedDate"></datepicker>
    </div>
</template>

<script>
  import Datepicker from 'vuejs-datepicker';

  export default {
        name: "exercise-date"
    }
</script>

<style scoped>

</style>
