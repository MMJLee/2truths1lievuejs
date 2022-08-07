<template>
  <div class="statements">
    <div class="statement-details" v-if="statement">
      <h1>{{ statement.description }}</h1>
      <p class="true-or-false">{{ statement.truth }}</p>
      <p class="description">{{ statement.backstory }}</p>
    </div>
  </div>
</template>

<script>
import StatementService from "@/services/StatementService.js";
export default {
  props: ["id"],
  data() {
    return {
      statement: null,
    };
  },
  created() {
    StatementService.getStatement(this.id)
      .then((response) => {
        this.statement = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.statements {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.statement-details {
  padding: 20px;
  width: 500px;
  height: 500px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.true-or-false {
  display: block;
  font-size: 36px;
  font-weight: bold;
}
.description {
  font-size: 20px;
}
</style>
