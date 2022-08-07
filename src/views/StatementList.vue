<template>
  <div class="statements">
    <img alt="Vue logo" src="../assets/logo.png" />
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
  name: "StatementList",
  components: {
    StatementCard,
  },
  methods: {
    getStatements() {
      StatementService.getStatements()
        .then((response) => (this.statements = response.data))
        .catch((error) => console.log(error));
    },
  },
  data() {
    return {
      statements: [],
    };
  },
  created() {
    this.getStatements();
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
