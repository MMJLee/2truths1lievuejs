<script>
// @ is an alias to /src
import StatementCard from "@/components/StatementCard.vue";
import PlayerService from "@/services/PlayerService.js";
import StatementService from "@/services/StatementService.js";

export default {
  components: {
    StatementCard,
  },
  methods: {
    get2TruthsAndaLie() {
      StatementService.get2TruthsAndaLie()
        .then((response) => (this.statements = response.data))
        .catch((error) => console.log(error));
    },
    //checks if guesses have been made for each of the 3 statements
    checkGuesses() {
      const counts = [0, 0];
      if (this.statements.length < 3) {
        alert("Thank you for playing, your final score is " + this.score + ".");
        return false;
      }
      for (var i = 0; i < this.statements.length; i++) {
        if (this.guesses[i] === undefined) {
          alert("Please select truth or lie for all 3 statements");
          return false;
        } else if (this.guesses[i]) counts[0]++;
        else counts[1]++;
      }
      if (counts[0] != counts[1] + counts[1]) {
        alert("Please select 2 truths and 1 lie");
        return false;
      }
      return true;
    },
    submitGuesses() {
      if (this.checkGuesses()) {
        StatementService.submitGuesses(
          this.statements[0].id,
          this.statements[1].id,
          this.statements[2].id
        );
        for (var i = 0; i < this.statements.length; i++) {
          if (this.statements[i].truth != this.guesses[i]) {
            if (!this.submitted) {
              this.submitted = true;
            }
            break;
          }
        }
        if (!this.submitted) this.score++;
        this.submitted = true;
      }
    },
    submitName() {
      PlayerService.addPlayer(this.playerName, this.score);
      PlayerService.getTop5Players();
      alert("Thank you for playing!");
      this.resetAllStatements();
    },
    getNextSet() {
      this.submitted = false;
      this.get2TruthsAndaLie();
    },
    test() {
      console.log(
        this.highscore + ":" + Number(this.players[4].score) + ":" + this.score
      );
      console.log(this.statements);
      console.log(this.statements.length);
    },
    resetAllStatements() {
      StatementService.resetAllStatements();
      this.get2TruthsAndaLie();
      this.score = 0;
    },
    getGuess(guess, index) {
      this.guesses[index] = guess;
    },
    getTop5Players() {
      PlayerService.getTop5Players()
        .then((response) => (this.players = response.data))
        .catch((error) => console.log(error));
    },
  },
  data() {
    return {
      statements: [],
      guesses: [], //boolean array of size 3, 0 for left card, 1 for middle card, 2 for right card
      score: 0,
      submitted: false,
      playerName: "",
      players: [],
      highscore: false,
    };
  },
  created() {
    this.resetAllStatements();
    this.getTop5Players();
  },
};
</script>

<template>
  <div id="q-app">
    <!-- check to see if the score qualifies to be in leaderboard -->
    <q-card class="submit-highscore-card" v-if="this.statements.length === 0">
      <q-card-section class="bg-primary text-white">
        <input class="submit-highscore-input-box" v-model="playerName" />
        <q-btn @click="submitName()" label="Submit"> </q-btn>
      </q-card-section>
    </q-card>
    <!-- if statements empty, then hide statement-card-row, show leaderboard submission card -->
    <div class="statement-card-row" v-else>
      <StatementCard
        align="center"
        v-for="(statement, index) in statements"
        :key="statement.id"
        :statement="statement"
        :cardIndex="index"
        :guess="getGuess"
        :submitted="submitted"
      />
    </div>
    <!-- <q-btn @click="test()" label="test"> </q-btn> -->

    <div class="misc-card-row">
      <q-card class="misc-cards">
        <q-card-section class="bg-primary text-white">
          <div class="text-body1 text-secondary">
            Select Truth/Lie for each statement and submit. The button under the
            statement will turn true/false depending on the validity of the
            statement. Press this button to reveal the backstory behind the
            statement. Score higher than the last place to get a chance at the
            hall of fame!
          </div>
        </q-card-section>
      </q-card>
      <q-card class="misc-cards">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6 text-secondary">Score: {{ score }}</div>
        </q-card-section>
        <q-card-actions class="bg-secondary" align="center">
          <q-btn
            v-if="this.statements.length === 0"
            @click="resetAllStatements()"
            label="Reset"
          >
          </q-btn>
          <q-btn @click="submitGuesses()" label="Submit"> </q-btn>
          <q-btn v-if="this.submitted" @click="getNextSet()" label="Next">
          </q-btn>
        </q-card-actions>
      </q-card>
      <q-card class="misc-cards">
        <q-item class="text-h5 bg-primary text-secondary">
          <q-item-section>
            <q-item-label>Hall of Fame</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator></q-separator>
        <q-card-section class="bg-primary text-h6 text-secondary" horizontal>
          <q-list class="player-list">
            <q-item v-for="player in players" :key="player.id">
              <q-item-section align="left">
                {{ player.name }} : {{ player.score }}
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </div>
    <q-btn
      class="github-repo-button bg-secondary"
      href="https://github.com/MMJLee/2truths1lievuejs"
      >Github Repo
    </q-btn>
  </div>
</template>

<style scoped>
.submit-highscore-card {
  width: 16.7%;
  margin: auto;
}
.submit-highscore-input-box {
  height: 39px;
}
.statement-card-row {
  display: flex;
  margin: auto;
  width: 66%;
}
.misc-card-row {
  display: flex;
  margin: auto;
  width: 66%;
}

.buttons {
  padding-top: 100px;
  width: 320px;
}

.misc-cards {
  width: 320px;
  margin: auto;
  margin-top: 50px;
}
.leaderboard-card {
  width: 320px;
}
</style>