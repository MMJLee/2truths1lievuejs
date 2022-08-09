<template>
  <div id="q-app" style="min-height: 10vh">
    <div class="statement-card-row">
      <div class="statement-card">
        <StatementCard
          v-for="(statement, index) in statements"
          :key="statement.id"
          :statement="statement"
          :cardIndex="index"
          :guess="getGuess"
        />
      </div>
      <q-card class="scoreboard-card">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">Score: {{ score }}</div>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn
            v-if="statements.length === 0"
            color="white"
            text-color="black"
            @click="resetAllStatements()"
            label="Reset"
          ></q-btn>
          <q-btn
            v-else
            color="white"
            text-color="black"
            @click="submitGuesses()"
            label="Submit"
          ></q-btn>
          <q-btn
            v-if="this.submitted"
            color="white"
            text-color="black"
            @click="getNextSet()"
            label="Next"
          ></q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import StatementCard from "@/components/StatementCard.vue";
import StatementService from "@/services/StatementService.js";

export default {
  name: "GameView",
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
        for (var i = 0; i < this.statements.length; i++) {
          if (this.statements[i].truth != this.guesses[i]) {
            if (!this.submitted) {
              this.score--;
              this.submitted = true;
            }
            return;
          }
        }
        if (!this.submitted) this.score++;
        this.submitted = true;
      }
    },
    getNextSet() {
      this.submitted = false;
      this.get2TruthsAndaLie();
    },

    resetAllStatements() {
      StatementService.resetAllStatements();
      this.get2TruthsAndaLie();
    },
    getGuess(guess, index) {
      this.guesses[index] = guess;
    },
    // childInterface: {
    //   correct: () => {},
    // },
    // // Setting the interface when emitted from child
    // getChildInterface(childInterface) {
    //   this.$options.childInterface = childInterface;
    // },
    // // Add count through the interface
    // correct() {
    //   this.$options.childInterface.correct();
    // },
  },
  data() {
    return {
      statements: [],
      guesses: [],
      score: 0,
      submitted: false,
    };
  },
  created() {
    this.get2TruthsAndaLie();
  },
};
</script>

<style scoped>
.statement-card-row {
  display: block;
}
.statement-card {
  margin: auto;
  display: flex;
  flex-direction: row;
  width: max-content;
}

.scoreboard-card {
  margin: auto;
  display: flex;
}

.buttons {
  margin: auto;
  padding-top: 100px;
  width: 320px;
}

.scoreboard-card {
  width: 320px;
  display: block;
}
</style>