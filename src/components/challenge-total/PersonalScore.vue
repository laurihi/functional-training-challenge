<template>
    <div class="component-container">
      <section class="score-total-wrapper">
        <p>You've got...</p>
        <h3>{{challengeStats.points}} points!</h3>
        <p>Your current position is {{ challengeStats.position }}</p>
        <hr/>
        <p>{{ challengeStats.pointsToAbove }} points to move up a position</p>
        <hr/>
        <p>{{ challengeStats.pointsToTop }} points to the top</p>
        <hr/>
        <p>{{ challengeStats.personBelow }} is trying to catch up with you, he's only {{ challengeStats.pointsToBelow }} points behind</p>
        <hr/>
        <a>Add new exercises</a>
      </section>

    </div>
</template>

<script>
  
  import ChallengeService from 'services/challenge/ChallengeService'
  
  export default {
    name: "personal-score",
    data: () => {
      return {
        units: 0
      }
    },
    computed: {
      challengeStats: function () {
        // `this` points to the vm instance
        return ChallengeService.currentChallengeStats()
      }
      
    }
  }
</script>

<style scoped lang="scss">
  .score-total-wrapper {
    width: 30%;
    text-align: center;
    border: crimson dashed thin;
    
    p {
      margin: 0px 0px;
    }
    
    hr {
        border: 0;
        height: 1px;
        background-image: linear-gradient(to right, rgba(248, 12, 58, 0), rgba(248, 12, 58, 1), rgba(248, 12, 58, 0));
    }
  }
</style>
