<template>

  <div class="componentContainer">
    Score-board component
    <!--
    <div class="scoreboard">
      <div class="row week" v-for="weekNumber in weeks">
      <span>Viikko {{ weekNumber }}</span>
        <div class="column participant" v-for="(participantWeeklyData,key) in getScoresByParticipant(weekNumber)">
          {{participantWeeklyData.name + ' ' + participantWeeklyData.weeklyScore}}
        </div>
      </div>
    </div>
    -->
    <div class="scoreboard">
      <div class="row week" v-for="dailyScore in dailyScores">
        <span>{{ dailyScore.date }}</span>
        <div class="column participant" v-for="(contestantscore, key) in dailyScore.contestantscores">
          {{contestantscore.userHandle + ' ' + contestantscore.points}}
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
          weeklyScores: new Map(),
          dailyScores: []
        }
      },
      methods: {
        getScoresByParticipant(weekNumber){
          return this.weeklyScores.get(weekNumber)
        }
      },
      mounted() {
        const scores = [
          {
            date: "2018-10-10",
            contestantscores: [
              {
                userHandle: 'aapop',
                points: 124
              },
              {
                userHandle: 'aaroa',
                points: 243
              },
              {
                userHandle: 'willev',
                points: 1200
              },
            ]
          },
          {
            date: "2018-10-11",
            contestantscores: [
              {
                userHandle: 'aapop',
                points: 14
              },
              {
                userHandle: 'aaroa',
                points: 0
              },
              {
                userHandle: 'willev',
                points: 100
              },
            ]
          },
          {
            date: "2018-10-12",
            contestantscores: [
              {
                userHandle: 'aapop',
                points: 141
              },
              {
                userHandle: 'aaroa',
                points: 11
              },
              {
                userHandle: 'willev',
                points: 0
              },
            ]
          }
        ]
        this.dailyScores = scores
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
