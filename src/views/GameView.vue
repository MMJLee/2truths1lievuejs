<template>
  <div class="statements">
    <StatementCard
      v-for="statement in statements"
      :key="statement.id"
      :statement="statement"
    />
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
    guess2TruthsAndaLie() {},
    resetAllStatements() {
      StatementService.resetAllStatements();
    },
  },
  data() {
    return {
      statements: [],
      formData: {
        id: "",
        guess: "",
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
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
