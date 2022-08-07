<template>
  <div class="statements">
    <div class="statement-details" v-if="statement">
      <p class="description">{{ statement.description }}</p>
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
  methods: {
    getStatement() {
      StatementService.getStatement(this.id)
        .then((response) => {
          this.statement = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getStatement();
  },
};
</script>

<style scoped>
.statements {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  height: 400px;
}
.statement-details {
  padding: 20px;

  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  font-size: 20px;
}
.true-or-false {
  display: block;
  font-size: 20px;
  font-weight: bold;
}
.description {
  font-size: 20px;
}
</style>
