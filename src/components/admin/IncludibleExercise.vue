<template>
  
  <div class="exercise-row">
    <span>
      <input v-model="selected" type="checkbox" @change="componentChanged"/>
    </span>
    <span>
      {{ 'exercise-'+exercise.name | translate }}
    </span>
    <span>
      <input v-model="points" type="number" @change="componentChanged">
    </span>
   </div>

</template>

<script>
  export default {
    
    name: "includible-exercise",
    data: function (){
      return {
        selected: false,
        points: 0
      }
    },
    props: {
      exercise: {
        type: Object
      }
    },
    methods: {
      componentChanged: function () {
        this.$emit('data-changed', this.exercise, this.selected, this.points)
      }
    },
    computed: {
    
    }
  }
</script>

<style lang="scss" scoped>


</style>
