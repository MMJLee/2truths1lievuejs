<template>
  <div class="statements">
    <StatementCard
      v-for="(statement, index) in statements"
      :key="statement.id"
      :statement="statement"
      :cardIndex="index"
      :guess="getGuess"
    />
  </div>
  <div>{{ score }}</div>
  <div class="buttons">
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
      for (var i = 0; i < this.statements.length; i++) {
        if (this.guesses[i] === undefined) {
          alert("Please select truth or lie for all 3 statements");
          return false;
        }
      }
      return true;
    },
    submitGuesses() {
      if (this.checkGuesses()) {
        for (var i = 0; i < this.statements.length; i++) {
          if (this.statements[i].truth != this.guesses[i]) {
            this.score--;
            return;
          }
        }
        this.score++;
      }
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
      submitted: {
        type: Boolean,
        default: false,
      },
    };
  },
  created() {
    this.get2TruthsAndaLie();
  },
};
</script>

<style scoped>
.statements {
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: max-content;
}

.buttons {
  margin: auto;
  padding-top: 100px;
  width: 320px;
}
</style>