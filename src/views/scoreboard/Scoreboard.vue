<template>

  <div class="componentContainer">
    Score-board component
    <div class="scoreboard">
      <div class="row week" v-for="weekNumber in weeks">
      <span>Viikko {{ weekNumber }}</span>
        <div class="column participant" v-for="(participantWeeklyData,key) in getScoresByParticipant(weekNumber)">
          {{participantWeeklyData.name + ' ' + participantWeeklyData.weeklyScore}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ChallengeService from 'services/challenge/ChallengeService'
  export default {
      name: "exercise-form",
      data() {
        return {
          weeks: [],
          participants: [],
          weeklyScores: new Map()
        }
      },
      methods: {
        getScoresByParticipant(weekNumber){
          return this.weeklyScores.get(weekNumber)
        }
      },
      mounted() {
  
        const data = ChallengeService.currentChallengeWeeklyScores()
        data.weeklyScores.forEach(function (value, key) {
          this.weeks.push(key)
        }.bind(this))
        
        this.weeklyScores = data.weeklyScores
      }
    }
</script>

<style lang="scss" scoped>

.scoreboard {
  display: grid;
  grid-template-columns: 100px 100px 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
}

</style>
