<template>

  <div class="componentContainer">
    <div v-if="currentChallenge">
      <h3>{{ currentChallenge.name + ', ' + currentChallenge.starts + ' - ' + currentChallenge.ends }}</h3>
      <personal-score></personal-score>
    </div>
    <div v-else>
      <h3>No challenge running</h3>
    </div>
  </div>
</template>

<script>
  
  import Navigation from 'components/navigation/Navigation';
  import LocaleSelector from 'components/locale/LocaleSelector'
  import PersonalScore from 'components/challenge-total/PersonalScore'
  import ChallengeService from 'services/challenge/ChallengeService'
  
  export default {
    name: "exercise-form",
    data() {
      return {
        currentChallenge: undefined
      }
    },
    methods: {
      getCurrentChallenge(){
        const currentChallenge = ChallengeService.currentChallenge();
        currentChallenge.then(
          function(data) {
            this.currentChallenge = data
          }.bind(this),
          function(){
            console.log('Error');
          }.bind(this)
        )
  
      }
    },
    components: {
      PersonalScore,
      LocaleSelector,
      'navigation': Navigation,
      'locale-selector': LocaleSelector,
      'personal-score': PersonalScore
    },
    mounted(){
      this.getCurrentChallenge();
    }
  }
</script>

<style lang="scss" scoped>

</style>
